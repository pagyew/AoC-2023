const input = `%cv -> xz
%kt -> qx, rz
%cb -> kt
%pl -> sf, db
%zd -> ln, gf
%bf -> qx, pf
%xz -> jd
%xm -> db
%vz -> cr, vc
%qq -> qm, gf
&xn -> th
%nn -> ff, db
%gx -> cd
&qn -> th
%qk -> vc
&xf -> th
%qj -> xm, db
%fn -> pr, gf
%sf -> bp
%jd -> qx, vm
%mc -> ds, db
%tj -> lc, gf
%jz -> qj, db
%sb -> ks, vc
%ln -> gf, qq
%bx -> qx, qp
broadcaster -> sr, ch, hd, bx
%ch -> db, mc
%ds -> cc
&qx -> cb, cv, bx, xz, vm, zl
%bp -> db, jz
&zl -> th
%vl -> gf, fj
&db -> ff, ds, sf, ch, cc, xf
&th -> rx
%cr -> gx, vc
%sr -> gf, vl
%lr -> sb
%hv -> lr
%cl -> qx, bf
%lc -> gf, fn
%pm -> vc, qk
%cc -> nn
%gm -> tj, gf
%vm -> cl
%ff -> pl
%qp -> cb, qx
%pf -> qx
&vc -> lr, hd, ks, qn, gx, nh, hv
%qm -> gm
%nh -> hv
%rz -> qx, cv
%ks -> vz
%fj -> zd
&gf -> fj, qm, xn, sr
%pr -> gf
%cd -> pm, vc
%hd -> vc, nh`;
const example1 = `broadcaster -> a, b, c
%a -> b
%b -> c
%c -> inv
&inv -> a`;
const example2 = `broadcaster -> a
%a -> inv, con
&inv -> b
%b -> con
&con -> output`;

class Counter {
  counter = [0, 0]

  add (pulse) {
    this.counter[pulse] += 1
  }

  get counts () {
    return this.counter
  }
}

class Module {
  outputs = []

  constructor(counter) {
    this.counter = counter;
  }

  addOutput (output) {
    this.outputs.push(output)
  }

  run () {
    return this.outputs.reduce((next, output) => {
      this.counter.add(this.pulse)
      const out = output.receive(this.name, this.pulse)
      return out ? next.concat(output) : next
    }, [])
  }
}

class Button extends Module {
  name = 'button'
  pulse = 0
}

class Broadcaster extends Module {
  name = 'broadcaster'
  pulse = 0

  receive (name, pulse) {
    this.pulse = pulse

    return true
  }
}

class FlipFlop extends Module {
  state = false
  pulse = 0

  constructor(counter, name) {
    super(counter)

    this.name = name;
  }

  receive (name, pulse) {
    if (pulse) return false

    this.pulse = this.state ? 0 : 1
    this.state = !this.state

    return true
  }
}

class Conjunction extends Module {
  inputs = {}
  cycles = {}

  constructor(counter, name) {
    super(counter)

    this.name = name;
  }

  addInput (input) {
    this.inputs[input] = 0
    this.cycles[input] = 0
  }

  receive (name, pulse) {
    this.inputs[name] = pulse

    if (this.name == 'th' && pulse && !this.cycles[name]) {
      this.cycles[name] = globalThis.count + 1
    }

    this.pulse = Object.values(this.inputs).every(Boolean) ? 0 : 1

    return true
  }
}

class End {
  constructor (name) {
    this.name = name
  }

  receive () {
    return false
  }
};

const gcd = (a, b) => a ? gcd(b % a, a) : b;
const lcm = (a, b) => a * b / gcd(a, b);


(async function main () {
  for (let [name, rawData] of [['example1', example1], ['example2', example2], ['input', input]]) {
    const data = rawData
      .split('\n')
      .map(line => line.split(' -> '))
      .reduce((acc, [k, v]) => Object.assign(acc, { [k]: v.split(', ') }), {})

    for (let part2 of [false, true]) {
      const counter = new Counter()
      const button = new Button(counter)
      const broadcaster = new Broadcaster(counter)
      const modules = {}

      button.addOutput(broadcaster)

      for (let key in data) {
        if (key.startsWith('%')) {
          modules[key.slice(1)] = new FlipFlop(counter, key.slice(1))
        } else if (key.startsWith('&')) {
          modules[key.slice(1)] = new Conjunction(counter, key.slice(1))
        }
      }

      data['broadcaster'].forEach(output => {
        broadcaster.addOutput(modules[output])
      })

      for (let key in data) {
        if (key == 'broadcaster') continue

        data[key].forEach(output => {
          if (!(output in modules)) modules[output] = new End(output)
          const out = modules[output]

          modules[key.slice(1)].addOutput(out)

          if (out instanceof Conjunction) {
            out.addInput(key.slice(1))
          }
        })
      }

      const flipFlops = Object.values(modules).filter(module => module instanceof FlipFlop)
      const conjunctions = Object.values(modules).filter(module => module instanceof Conjunction)

      function check () {
        if (part2) {
          if ('th' in modules) {
            return Object.values(modules.th.cycles).every(Boolean)
          }

          return true
        }

        return flipFlops.every(module => !module.state) && conjunctions.every(module => !Object.values(module.inputs).some(Boolean))
      }

      globalThis.count = 0

      console.log('---------')
      console.log('|       |')
      console.log('| START |')
      console.log('|       |')
      console.log('---------')
      console.time(`start ${name} ${part2 ? 'part 2' : 'part 1'}`)

      do {
        const queue = [button]

        while (queue.length) {
          const module = queue.shift()

          queue.push(...module.run())
        }

        globalThis.count++
      } while (
        part2
          ? !check()
          : globalThis.count < 1000 && !check()
      )

      const cycle = 1000 / globalThis.count >> 0
      let rest = 1000 % globalThis.count

      counter.counter[0] *= cycle
      counter.counter[1] *= cycle

      while (rest--) {
        const queue = [button]

        while (queue.length) {
          const module = queue.shift()

          queue.push(...module.run())
        }
      }

      if (part2 && 'th' in modules) {
        console.log(Object.values(modules.th.cycles).reduce(lcm));
      } else {
        console.log(counter.counts.reduce((a, b) => a * b));
      }

      console.timeEnd(`start ${name} ${part2 ? 'part 2' : 'part 1'}`)
    }
  }
})()
