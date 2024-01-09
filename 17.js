const input = `543135415644121664566625454644364326323251554361445211251336437167737713355747653541632652717473261632122337312744662464551621632454624525433
523452243233131661556311354435723644276175273633775734166212624216613154652327327541414141334411255642312364362732662552661533666416335235424
545152453653226425412623242767434657113431124136341544313315237417667525215266174171665617754233364422334122422643431315523625466544166421441
353546624251421214241346411274614365132576716315332713514367518856375444532852525524534215172735365465462621776156712651415161654456615323141
333325154556332451123565516657751716465171357775373665124885285663785785772387472672467224271714226356766616554146437116133651556662642153241
123542152246231253531125576656251756761634122767511376323335558256237255865323348757727344224552527772447176377766762317544434141452451446461
426425436341165264654242345732412547334676123336488857786535348728327825464343822387762426742467614174357154245746434625315524443322554333623
342312265345136552337176152375242427417445561254825473772334548762835833553777363247858458273222313651662333415614514354354344134331626356452
241666545535361131751232121731577363514657574825725768235583348472557626577863846548522685844322572644214151152715626237441721253654155361133
453413542351624256144426136476555437712456843587862854246836382424336257263854568526676488736678383851364221357215266314233214513435614542226
361465234411534115631756114417467362132634744784342483267524765247454474384385663455845223267367223683517314545626536736624762552445135534116
421555241431232465516331522445423453648288246757658776533445224487537586426342882386843387567747276743262735145266473116737117335344151424651
152262146553161326473146671744261653752446436666322333427686374544728376646735537538848465845878452723622881536565271542324442627311555361453
562322422334633442671761556732623775453466387886347462685458265276653244443782465627466353626276335387553486524635722115463237512164326565562
116554531225512773243543275741747753574646348846653778524534268848767563277628352468275848834374663555832688671377717616445662616142233566122
545631363243176312211414441714578664424663736784674882566485882478625774826658363486585376565646878222557784737146775761177424622537265524262
413266556441744451275735573644778873377557426664884652446487483236842838544875783526842227758585762664464753665245165735227516474724121226543
214114111145365174271312323535375532333784728548483483647277554398389537847445966724754558865773468547222487727628432767425654152512212254213
236265554341366424354525556155856333443257274646655558566888837594487383436354537356755273824634425875272735458568366122135265533316617543333
231144433422644772561534113373853657846873486685775268459845868645364367433345938845499873447383884564664545325345371453537711515241277645512
446344537737414753634333442226878573276868352783756994449663446443989735488889855995797467496645266465273647764663447122257537324217621314141
222232166754373615315361324623778487486225688623378399834533948636968486885668459699973489666324382453657725638364386366457553472653146563562
616266773147674614756457262784527677747357477583853963549544553546485576668477754476639583344597654828767337673852424465123524265433637474656
646465614771136431225373867756756658432863825865976596794875739598648866457385887837438386679868586545442728823233484337765645364133421657155
322361141212722614732645876443328222847738738389469939658985569688689559546889495963738537667385687675278422224874248572383674116542117537515
446277343675275273721676657478734228282849747473698434887793737667993673887454453794436659784796664948634327258537287465841455312644252425211
235676116752331345758878445434385422532865598966499499686899386683475887568839573544458449554368664854948846762448487474545762632734637244643
527767713767171535577743832658642352465585436437554387953354668449936384667543597379545963785758943753886837865543523478282757215531621755216
457132726561617145535555577563677762389347953678765586994983885379388969357753834548873776664786938984468464825643838232756656765572121225577
544312711234253552446676856568555824476638533983377496865664865746836989695739558379358847338439496738783432574484322225387477151532724441323
344471436175454282684335672356243827566556858983377934365543533366955484745396539465854777684637585536448365428462447846535882765167466114417
335524436675765473458825353833642353534973946375356565666999864766474868655547667599887458868534486436759646984465737573738567836621713266374
723634156613263752387237257473262334743636966768565488655994676948777859445899859797638358486658788545395688332685858677565743584644162635311
473357534612168262746467327666734876638449996543556974689975964569544598894888547546558477675645885546664444397574262235266626733661574256135
642413433454448557835364443737433355689894774933888459756587564755584455678686754596674477669544495987398789847747776853435722463761145741233
535553164427633222286324284228497868593855543587499869888495797558758484768855865767577888745574933566687455584877576367827486345275243651225
413647745635232477226285456757397563379799479455375958896694455966498644889558957664759969667336835553946338977679567855665465355751267762151
647147124673888732586644383588473537797548896384444589774645494697487674974454496767794877644756933549959569559466825334354324644274227126122
262166125514677455444558335396858668897789495335846779994795785767855649856889896657564559895679374758434333744559346833684586343286364777337
447766427152663685473585484353867388373779473677749754874997974844488756656489988747577584645787954569986957868539372783337676225285515236217
745646425325526584448633377956985385359454587966455894599784494988848446699487788667567994945866496654947584639876736684862758584868244161162
251547374232646844757738883778563567663937599867784556455898877545896847759494877969454494586486586583876535375589997363534628364774611317577
676115263476565555844567299955389954944478648665467764498694798767477584556546886578669586964489797947565857866487377363887455785473882775244
716374532366428278276463686884946487999968869644889946648656676986946669794559456578849595875478559465935599886476878395644847767282457266266
553735264778656722882466485574357465946387594578897498688754588495675858978874966685764589985448787578678493538667367345436743486245545262176
415213238623852343254539793365886375638688754885446795444778645659897789598865674876654456576757568889568574468658994834422366762462763623122
633766166846226332482838693944386999773895667554479678495579957596888766667567699554994754869586996887795996464337559575635755776525748477457
722525774544633572835847874876998435989566779794699464674976977858666998659697995698667466475586795955646753734597736756427246536748838452531
274532754732445754552376686535559849785674874485684697796675985966698756875855888889877549994869456586998788687347664544866722665575388477216
571411237233865857427869837478747693955998969448665468986558777597577567999999968699579759645898499684899866937856756539493336827634562767737
647221552324438458646645387638993648684495986548566867587558588887857957656756895958697956578689885957894586686768789799333825432863422233535
212753464473324537565983578596883687898549545775498756978699589855756988885797898886988778497446666954996749994545456646396267243326866545251
453372327482767485679965443499565657549969588544995887575879657599585797868858556877975998799755889588746446585999586995635682664646274566567
275555425644322327366776989363773449674576657646757686789765985688695575698658855668666888586569585746996558857996467956698373773243562285235
757542785436432443277686477598498744467564464767658688697996566677675879656955879966566666575878586495988459476535893878448453642683458682234
556178653272544257359555793686987387857774486749795865578998975869779589765875559895776696578956845556844497679376998843589543456676327286223
331513638634733226564437487468549667986559886577787889599975676886877766977855977986566977986758665477985866949837936437666823453276243276414
775547788657653373657975954489937989557969576876797596557868679787788585857855756698697855787578668458645899898489486859396773364872287828864
553777533745838564384767799539744568756599975565678665856556558797976886798857758669596767996557946579777486979553968968489544535258754653641
322358458845235475567678787989444458896878575548969555776598565758777797866879687576879659676796445769688586899839647343665937855355456546247
576637538585773252684544573598567769555765488657575775575878598998876788976688988698877668575896799875765765574539548453697795528675274485351
267732573846422374684975477338495967848446646788865775797996996688967977878688987767757768957967746899557856586379468676538378764467728864411
462254857547584643684874846346877476799498877886577795689589866887786678777696986676767588788677999847688558749957557996765363867574876658736
313538828463423639793756856997849958568755469689966756787785679688976697996869768768678859877786694499885445985964795667646436783655258258685
574882285723884266867373374736447667897587564885775779766786698878689666777797687885868978895976555848479867887955865875344397873246886385753
227342458454287879734359988743489764859478766898865777895859786878676777768887888778795569688976594799577789967449378479558448633288645366776
667537388735635559568963899485577977685479787969965878787966876767679988696779798889698895777966987479467845579583439939557976333524427332665
741358247575622525697886497437454945468856565789795788679797776866868988687996899869859598777878665459647999475693765367573939767826532852337
552567542766532887864797497666958654474568978765687959695687797878866877688876678967685798555767859474965679665994447985955736452675484336583
553664887776356465895538379857777748474948766965956985879966977976678998687779988967976576597957689966554797486786964753784887463682826428835
761743784624266733534733693979789655755556646696775997877688979797779887699988698788676866765977986979999485559965445757736573625575243874373
541786265582475569476969988345457946464487548587868665687577787777777678766867897868955659665999997964648589544596568644334479473238656546573
557225756564824588954869334594795846447475755878675696979689779668799866677678888766766777785876967444778664497768954535799879783443236676222
632323274767665868974364433635478765765554887895976897668897978787988977898999786669658857869565867557898999986676497433958639382525837727746
347775645633252355598634397998549555786887978968857978788777967669798699668669788896796775755595768994565674876667586889857557584485275352833
163528528637683464544535679594689467855964649678875568996969786787889976698776689886796679555686959759798768466635979543754693228266482344585
242865436535322738474768863594886769755999449696977856858599899899779787687898676878689785789787757849488598957776857749347377542887224632862
171567847673353249579355633469799867748466595758665699659777977896787796899878899899875589669957564457586568464448343987993684672266453674424
272746278238274837698465893873347855845684457696599559957787796888989876798779899987656877577556554587848784575635344639599375235464462734751
531362672728728235883579768646866575967658946955678655957598877996676678766667889897679695856886664899579598698673687995986536327253348356431
237485466268847739853734846559956499567847477899757856879886977989967867968867788785789798565899599566696447646736789455396878253263757664621
161554346832528476755856898778364445768687747587698955776656556778997676789999698599757588597667974556864494588859548743996948672743845746873
733282564525337783767849545483959588846484876676697667679687579676886989986897895569576559885777854668776675596587657858357966676286534484316
571376837246433642753638755698667545884784874589657785755668587976788668887888685699857596796858665448979449569653558433973594424786828857623
417727745857524738756446998553767647898866479879677956666589656667978696689979876688787995786579558674446847954845698993896342868527822727247
732457735772247737773867549783793587977484747744898659695577975776967975669698696968756877676695555487765548453497943757894482285532854624445
313253863277655348273998333779966789668948559747977956595775766978887685955578666956676855789954449447465764583955557553383435367777635753764
626716363658588258556799998544934358876977567945685977765765997575865768986987978769957688675675596588649886994686794599365682638666453563532
561444637568837324264439958958767669666495864874477765797798697668675785986595979556586878588685479568488785835373964865676734236484526647331
452468783426632286846496836349676447499597687887469775988969978878687687895858577995978877669447476759454486474657743786576653877585838446372
251745465562553252674738765783355497859574494978556557655887765657779596775876866765975668665658558774477497763585596594596645788737273247752
215263425276453837836475698956435547864756858968794888588755556997598576889787758576698757486478598746897567466694644553668368275374788577221
275713876556485736663846694339954699898556745867946564995799896796955688568969688656785888479779799498575878747987853757583654363866323367231
135362786533763627327869733439583778845858948744748979766796865578776697695587758988868565788445555558589736484935853988792582335852783384775
744342422547374262835598693756375488445457985758957969855968968988876656966687669659995488795699677985664874746494763396687834748244846513612
453116254632377455723794473964778959458677755549444888674795856667787598559867588659596765575547856498688385949533639593475283442655367845476
551771744335868438746683798683639733568987684797955474576759567997685677996896987869555784644896774668965487864485687464273744746535432727465
155424527235747733268865967963869876744788444745864867456497469597566778585599557448796786889867976967467857988665458956484526427788334644117
123512646577255643864473469594766486686697874756599898865959649787877596585985597956879675977584644655987958874756573795685566227268428144674
544654771277635733682573699497354467843977875649768895589857765499765688544785977945586557854557647558766765563453393956836587477366643471636
275645512547757232876476657358757757643535666699458949477658544554767985659644487549479584944864677575763698776959443336625785834536222276327
134757665654836856855482734489934337633747688659568747868745657897756994797558569648495748946564596887455649554386346335543878646788275142416
272327447375884625863526775493395879757578977596659849587677787779879864845654494487774894887854559674758569888343659586826627423524615115242
756545677118855647566662423877439857879568746556989688674598667849577688674776998499886556857456783396338547593583365828865277382285152534452
571521713343332577657685525874378834369675434458484546467675466944759788899494799845794686954589493737636949875384677444862755238345275255424
476757574475882524543388246257846658443977545678644455594795665774478596669867878457687697489849537466837645634374576856348626744773454247733
751433212274246673636456727436753465774334636755976879767885444975995658479798987479744466695487983935337943633345827843642788755384436537271
175316133645624852738528266752733345896683546394469566449799795589798898487559869759995645487669484594446335693587634387776677824661765557317
514215376163136273727464224556667956754749896539596648984699975444664449798695996564985769979855583597766975336732548422225454787265433743417
454173571437647553684633635275275956364534867868935787557965485476955455884794666699864946677876499895695444438587346424634856742343631571775
317531242215577777735664277688256358849764374686375443857766794455867789668846765977648373759364483473867947538283227745646577433455115412125
627177543117316557366464855275678845668846634885493858789578869479954646679544749569894359776339883765383556635844646664654562344242726457552
127345274624157352868473686785675669693437879473585375667847798383897486455447676367748649657987396578984566656583423276227553464317267355337
134247453542372255273833482852865324776634466544978795866377449849664595536979684555797546744776845878758752364227637243766376755767446534623
521641153613312437555227327824454273455457657947758998587937966583846353777958678757359598367768969746468538736682258865862454543314577523234
241366422441254773773823447534376855533373796754699386984986433864637666578859635765534583599444758794954562356322475527482433525346763164672
435762534174617232334644427328262863237246373738344996386993674676685734334546795555639997364685697353685453687634644557735121416617564213226
545751753641433516176267332656727374773255876956774733484556995678458669544664743673587459665999793486432738674474582542745631123134531756255
653551326232451177554273236854638725423432456895748473365393653978486649334736454445995639595899845565445682326875285244563437626462223257364
241247327151277154243223372887455252224245558849936663366676438945763783373634683858595533784984995274427786582634226478573272767357561443154
524427742756251516526117677722643628753433744668575396869476336655993599483469569379764379344694586384667677368876473838156166316626672656246
362513175162513662343371254578883473344388683546573356846964687466758845584694744733395849674965354357652325354344677842414154333572313355243
256655654213211145676535362768373565736528224342634338634749478368484836377595859489764683375325253884523448455854836442154151163614531113462
352523225532337162511342134465828275453287345666543548544536966458669585358643548834394356484222643735755844783842577351625343573566212654352
326211631754332536446514273253383366873336522656657538836776985669468596678484655933753784385268768253464354375782343246342654667637166516662
335651326155532156134733144555656548263236555483865375823526778968986693739663736575363437868726634833562377845333547156134676443174754214415
154356351362146361576546236466384426727268248453554532477368772545662285446633583755775276833367426352327583385354367276265332631745631546445
156345125361717232461112247255755424463223554886655222655343442837224432477533444448556557842363274736485246247171141277353166166133425511634
465116265242411431377164462746734565883778746277846774286446863836525844438438784233855585322523668763746573881425236272664615116134351322135
356315433333353163624612774361575333853265787776435655283473783723854263836358766834275343426432755546642427715564213121165421745115622243533
155316544616412413444264761334432324264632354288374853585548247654378683345365763258745427655523572443362887441122124672525455737332613353232
332653435442244312321434426264366556314254825477874364722533248724784632486273532785886543622774747856244143216462541261432324654142625443335
316325412626526152365513314753554647452767282473635724332454858227275245425658886384373767684425736633417451663126751413217514513245515533232
516641236421355141423766213147323515634571753435375442265263247482822736847485287758843735385742342842261712616116563717723147122461466132551
636621425262456524332722526113546562337414362322455288565578862334837465672663884488443434238473727141632733171174322664533536342654244611115
465533426433653122414236515714215612265455541712427753622824335432428547584548663626653244272642714253353631414612465513144616614514354465421
464141135331211546466636464356255127736212136755737246888376562755655473288882786752767833265664577333716375715532451242174334142536163654233
253155365116552552336134373111322364466677544136335364764424422282234236273267858768425342166676774472231542744126462571523113521361622164236
131243666531232253513125422521347744754354454773617774245735256343682684674883555787285457317644423167471451473752371276435456445235163364511
511551511514141436554341664552752161423257762544136743552164633783465663766442734257443251153627341436153244762154311363342324342265555131155
444532656654314556436243242456473733511114274716762542454554655431643124512716774141776434672332265615644336546472732226136545633246331624353`;
const example1 = `2413432311323
3215453535623
3255245654254
3446585845452
4546657867536
1438598798454
4457876987766
3637877979653
4654967986887
4564679986453
1224686865563
2546548887735
4322674655533`;

const dirs = [
  [0,1],
  [1,0],
  [0,-1],
  [-1,0]
];

class Heap {
  constructor(init) {
    this.heap = [init]
  }

  swap (i, j) {
    [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]]
  }

  add (val) {
    this.heap.push(val)
    this.heapifyUp()
  }

  pop () {
    this.swap(0, this.size - 1)
    const val = this.heap.pop()
    this.heapifyDown()
    return val
  }

  compare (i, j) {
    return this.heap[i][0] < this.heap[j][0]
  }

  heapifyUp () {
    let i = this.size - 1
    while (i > 0) {
      const pi = ((i - 1) / 2) >> 0
      if (this.compare(pi, i)) break
      this.swap(pi, i)
      i = pi
    }
  }

  heapifyDown () {
    let i = 0
    while (true) {
      const l = 2 * i + 1
      const r = 2 * i + 2
      let min = i
      if (l < this.heap.length && this.compare(l, min)) min = l
      if (r < this.heap.length && this.compare(r, min)) min = r
      if (min == i) break
      this.swap(i, min)
      i = min
    }
  }

  get size () {
    return this.heap.length
  }
}

(async function main () {
  for (let [name, data] of [['example', example1], ['input', input]]) {
    const grid = data.split('\n').map(line => [...line].map(Number))
    const n = grid.length
    const m = grid[0].length

    for (let part2 of [false, true]) {
      const dp = new Set()
      const q = new Heap([0,0,0,0,0])
      let ans = Infinity

      console.log('---------')
      console.log('|       |')
      console.log('| START |')
      console.log('|       |')
      console.log('---------')
      console.time(`start ${name} ${part2 ? 'part 2' : 'part 1'}`)

      while (q.size) {
        const [c, i, j, d, l] = q.pop()
        const key = `${i},${j},${d},${l}`

        if (dp.has(key)) continue

        dp.add(key)

        if (i == n - 1 && j == m - 1) {
          ans = c
          break
        }

        for (let k = 0; k < 4; k++) {
          const [di, dj] = dirs[k]

          if (k == (d + 2)%4) continue

          const ni = i + di
          const nj = j + dj
          const indir = k == d ? l + 1 : 1

          const bound = 0 <= ni && ni < n && 0 <= nj && nj < m
          const cond = part2 ? indir <= 10 && (l >= 4 || !l || k === d) : indir <= 3

          if (bound && cond) {
            q.add([c + grid[ni][nj], ni, nj, k, indir])
          }
        }
      }

      console.log(ans);
      console.timeEnd(`start ${name} ${part2 ? 'part 2' : 'part 1'}`)
    }
  }
})()
