'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "9b818ca9511483c901bed1545384376c",
"index.html": "8a476d5829682d60e0ea0945c6810984",
"/": "8a476d5829682d60e0ea0945c6810984",
"main.dart.js": "acd0231cec4504a70a4c6fb5c31e4992",
"flutter.js": "7d69e653079438abfbb24b82a655b0a4",
"README.md": "6f8b4dd4699677bc6eedd9f660defc25",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "e2b9103aaafaf8ed9f90576c9d9a1341",
".git/ORIG_HEAD": "a87ab0674b1654de133a85117417d69c",
".git/config": "9e2451533c835b7e94ba4bf29da90675",
".git/objects/92/461ba9d20f71f47b2e9f0267460ba4d4272d34": "d8def3e15e4069c3096bd1059d85af6b",
".git/objects/92/1ff16054ee6f81c635b03f8f3ae7dc0aabb285": "cdf80498a81e79556de13ff3ee56ceb7",
".git/objects/0c/ca5f0c7eb78427be98269c64d9aadd329b39e0": "6299ded2c33980438755f2a2f2f1b8f2",
".git/objects/0c/80415a6c2cddaf847107750da50f9ee9983576": "c088562d0da489018cc075cde9508761",
".git/objects/50/b9778cba30d82c282febebd1dfbbb17581edd3": "94c8efe9d5fd69efaa57371a64beb6da",
".git/objects/68/4ebd569fbeb890b1d8d3ce73cfdf3bb4d78022": "5426d825b86be5392670df2e71e30aa0",
".git/objects/57/a9691a462d306d88b12827c2eb6a24d08e00ac": "709e4d7214069619bbd8611290fd06f6",
".git/objects/6f/cfd2c2ff99c52c5e7fccfc4516d3bbef225a4a": "41e46c4a0b5539c4fb6ece6112509ca9",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/9b/0f43692c8c0d2cf90dca8d0103a01f90232251": "7fe54939f0bcda7fb4fd385b94fd26f6",
".git/objects/04/e5efc15dc0c60ea2ffcc37c5bf25e96689f44d": "978222f47488835b92838c74cb5c684c",
".git/objects/6a/67c08082729c9bc2c76f37cb9fdc597802c990": "b74759b17d3f06994b15772c266d477e",
".git/objects/69/c9a0b426f18d9f1cb3e229c0f95aa235b7b670": "363a969b8e401b957829c74054a47281",
".git/objects/69/2fdbb6f032fcc9e4a7bf0db23258ab62beadc9": "132f0ae9b1db101951e26d20fbbf069c",
".git/objects/69/141b96c8522888d177f6dea284d3a9dafe1e3a": "9728c078d7e09291983a73636afc90c9",
".git/objects/69/dd618354fa4dade8a26e0fd18f5e87dd079236": "8cc17911af57a5f6dc0b9ee255bb1a93",
".git/objects/3d/245a78e40b6013ddbeb7c3cab3055b51ddd9ea": "f273b736ba4ca930c96d21cf696dd265",
".git/objects/58/f453584250d9280c736aae1a94f450d4086fdc": "66762c6a94887c9790efa5b585c30d66",
".git/objects/0e/32afadbcfa0c931a341226eed11b8a99c0f64e": "4c5e7bc99a60e341dc37bdc6ffd3bb7d",
".git/objects/0e/10b2722dcc130d78e4c25544d2c3662f224d23": "be7d4eba65655f1a9f3601c75d962271",
".git/objects/5a/a58a1ce04c322f13217c6260210f80876a5835": "d1e16a36fdf54f4c0bb93c2e8f0b6d3c",
".git/objects/5f/8cfcc1207f455cccddedccf5346221061820d1": "1d6f49bdf54d9fb6e9aad2dad60453d9",
".git/objects/b5/a956765bdfbb7390c7d2be871fc9fd0217276a": "0b4c480e1f54f489465aab79d55c93a9",
".git/objects/b2/0c4aa1dd7d5d1ae83d496b48109f42b7ff7f5a": "8cbfd70f91054e64e689b99b861ba958",
".git/objects/d9/840b183e3a78550870a24e1d16b261b87fe576": "28999dee2a8fdd172097b366a82fb335",
".git/objects/d9/fe056990d3ec67ce7bf49d0a5a998fa3ea8984": "dbb3342dd36d1514b2df1613693be929",
".git/objects/ac/2fe06e6f9b355427ebd722a42f866a23dfc032": "50d04416a3d70675e32b456f41863a7f",
".git/objects/ad/d2ff2ef6419700465d212b85a62517249a1931": "00ad1e8ec0059c83d5c8f6f09252fa6d",
".git/objects/bb/3085876799532613a08c7ebe43f24f0cc46864": "1b6aa21800d948d5513c15e54d131215",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/d7/5051b42d96ed392e0bceb9cbe76f04e79e431e": "bd540b684990d2622b070e9564b39a81",
".git/objects/d0/d97d63fc1bcf9bc27667e4679cd6a027ddab18": "f1aab2909b24106e16031a54c8c2e4dd",
".git/objects/b3/3819935179f94aac67ab19a9071348a81b620c": "0f91ce155cf7be20d5288d86cfa9a668",
".git/objects/df/7d2dcb89ab89da87467c0e1059b38c8d8f9296": "a44162ff357b024e4638ab18a9bb01c7",
".git/objects/da/7e645c908502dc866b1f87175ebb320687e515": "abe863f30d94ac1bb58c28d78720990b",
".git/objects/d1/f297778fdfb7ca5db52fd190a9dd409b988298": "e6a03523866c0d325c6f6aaaa96cadc0",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/bc/ea284242a68420ce146570eabc8bae77835f91": "469aeb964255505056c5d638f4bbe43a",
".git/objects/bc/f6e7d2934775ef27fe7cf859d84612e07b8c37": "0986d97fc7642d7ceb9d29e0c6ba0839",
".git/objects/e2/bfc3b7ceca157a1d0ae477af1ad9d81d99023f": "0e591790ad4dcadf0a9c7efededa701a",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/c7/7a3fd84c1420601da8bd8ffa55f136077cd21d": "9d75f6614584221ca4c447690177e4bc",
".git/objects/c0/c5fb34e054292b5207c118fdf8e46c11a250b1": "5b9e851184df276c2d49f90fa641cc80",
".git/objects/ee/226900b6178cba7ea0e86370735141779217f8": "5a815cf6c9d7c06825e1867e0cf58329",
".git/objects/ee/788ce0cd2cf3984ac01540efee5970c1075a79": "c6ce2d44af103d696722e7ad10aaa85d",
".git/objects/ee/e39987c926008945a0fc477f80710da9d6e4ff": "d5b938bd2960835c0ed91c18e51ca8a8",
".git/objects/fd/435fa856e30cbfb8433a94acbfb83885ecd413": "cb883122ad4f7a2b9df63f66a025bf0d",
".git/objects/f2/55832861a7336891e6f005e1b588be32a760e2": "0af1947c550925a5295fa6c8331b3983",
".git/objects/e4/230d8abd6a7003497c390cfd498a6388492e7e": "377b648a65100d742588bb759c368314",
".git/objects/fe/f409f70b08fe870b5ffb754effabd3e2d85de0": "3277ba24b883cae3978a7379b96e7359",
".git/objects/c8/02d23da5c42de0ee4984c5268066302d34bc49": "ef3f04e82ae5136f2d1e8b52759a5a29",
".git/objects/c8/213610b6ea46a5f155c79df377242916ea0def": "1f012a4c122ab6bb50bcf7ba2d211c66",
".git/objects/c1/e07b63dc9c089332354786830753e61f1012e4": "a8f819fd242f8a5bdd5db9e7a2ce0f90",
".git/objects/c6/7d13d99f65c77ae329d1eb4f11b0bfebc08ab7": "c78ee73fc8656c7c3d080230da529034",
".git/objects/4e/10bc7c77b6167ee06fcfef3ce49aa839d3c252": "80944659ffa2afc9fe123552e0481fa0",
".git/objects/4e/12a09ad8c650b05ab965fb8142496a5565dc24": "e6856d78a33e2ddfd07cf6bd63b5f7ae",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/27/05f124c8a21adf709cb9a336cbadb23e58d0bf": "2503286c311fb0e369fede931e0e34ed",
".git/objects/27/a9c87fb48002e5550d755b7bd2ccf44ca606fb": "4c224cc06a1ae7a3c915219de62c62d5",
".git/objects/4b/12c146b000b40cf927d94dbf088f7c52cd5a00": "d258c69a84d53d4c1c0985c6586a3221",
".git/objects/pack/pack-34379f67b2bb91484728c944d5c98ee6f7318236.pack": "e6756ec413daebe1e998e3f6c653cc4f",
".git/objects/pack/pack-34379f67b2bb91484728c944d5c98ee6f7318236.idx": "b2416d0882bcde99c6fec84b91746c5b",
".git/objects/11/8f8d27d8e1ff2adc9ee9406a96ec80b773da20": "d2e8b33d12c86f1eab660440fb81862f",
".git/objects/11/0f709a5aa4749482cc734cf6933ea9ddb08202": "0e17a70b9429dc1d75627acc791ad06e",
".git/objects/7d/b67cd64f9aec46217fab868520c7004e3f5d58": "1281072753f6a858293fe8ad36aa0c50",
".git/objects/29/4ad7e1cb043b20c96bbf2f383a1dada0df68ef": "c69c84466d09ef7aa2709a8889ea5d78",
".git/objects/16/6a3da5e1991fa68f458cf5d397785538f034e4": "b1afb1fa8e91951fb83ffdf42204e91e",
".git/objects/45/3fc945e4bd4e3a59b7a516a81e3925ebb3838a": "c7c3ab95c8b1d986240a0248c93cf891",
".git/objects/1f/c6bfff83b8470c0ec8ed33b5dcc8de54b76b43": "5485baea8b5bcc9a1097e2fa9e89476a",
".git/objects/74/d2917aad94e01d6b6736d86ae77440014c6a6e": "ab0d325e7b264e3879124404cfb691f8",
".git/objects/74/6d57cc4d7ed450aba035048c621b8b3939368f": "3f9fd3c8e55f4382ee145820b58ae752",
".git/objects/28/7aa7268b7e1435f6720abb63fb57666236a20b": "dca682df68116a28c8defe97f16a9b08",
".git/objects/28/dc7f13917db66ede3fab1fb13fb5a1c4d5843b": "db59f21a8a110cd6a20e241c3d81b14c",
".git/objects/28/5aa4ab7d9160eb310112dc5708ec2070e03144": "0283158e28a25d2d597c25c669884e9d",
".git/objects/17/0de6a19fff87b357e3036d86095dfb4204d835": "ab6e5d0eab563e6db010763f4ed74d26",
".git/objects/17/d0bc373e5a86ae3b9e0f48f62ca822203758c1": "264b16c5b67b9748a6063e9e23d518cc",
".git/objects/7b/e771d08e5c2d33c9fec10b7694b2da9d4ab444": "99c217bd0fd8745ac263b1bc927c94b7",
".git/objects/8f/e7af5a3e840b75b70e59c3ffda1b58e84a5a1c": "e3695ae5742d7e56a9c696f82745288d",
".git/objects/8f/1cff0f93ce6ce60f86bdefaab827e7d401b8b1": "ac056a2ca0c02d6d57bb40ce0ffe56d8",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/10/83ca5c62db6b525107aa9335e0ffd8b88c2309": "45f0e85ad3e7335278d7198f767f2d37",
".git/objects/19/8f5499a95a0c2e87c1993a821e1c352006de24": "ae664f332279b148fc63d56d7555375a",
".git/objects/26/586c983c1333ce749dc5e6eede572d95f21299": "ee1ef3860e8c14ef94b749fccf38a0ee",
".git/objects/26/9fd39f6c3027fdd86615cdd0b5f447912e5faa": "118406af7d35c7fdbd43aa302369b922",
".git/objects/26/96f4a05f2cfcdf50812c7743d3006549742743": "1fc44ab911065c168747b6bee6007ee6",
".git/objects/75/5ddd723711085ca891ef59e60bf20fc6703564": "78d5399f176565be4a5edc936a172c0e",
".git/objects/81/91bfe221cf7e6995517f4d02d769e3d1534889": "7def46afe742310d951e5ec35882f050",
".git/objects/81/6c393a903f20e868e14b291d62cbb7c0392f22": "bde279184474418a7e5b317ae442463a",
".git/objects/72/7c3cb721dd33abd674a8f166628de3f7617646": "f9e1694120b51f1cd6c02d79fc667ab7",
".git/objects/72/355045c62ec89654dec4833e1c6058679c6911": "8d5d9dbd2a89e4daca9dc09617e44cf2",
".git/objects/43/076d7adcd3d25ff1bbee6e760ce01e12214cfc": "e588782ba4a0447606a86c4874309740",
".git/objects/43/9e08b0667139b79df4074f2132b1b0a2b8de8c": "dd0d5ea8421eba4b1447b5fc7f3ff809",
".git/objects/43/e946e398d96aee466fa0aabb625f0889c3a4bd": "ac34520dee747f675e6e0a15c0bbd2be",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/9f/f23f11df4c05c966cdfb3bae0787fe7352f7b0": "3c77459f13ca2c8a3337fb73e0f14cfe",
".git/objects/00/b5f911bf7d463d2e87636065b3d503174fb684": "0d6c999d9dc7b16ae860c4beffcf62bd",
".git/objects/6e/2f7c906a2b291259bf792882e131522c9cc767": "b6d8e7557a69fd083f6bba0651733302",
".git/objects/09/f85aec8e9f48c833046a49fa6e583814ff257c": "889fe0b085e257036b2de1dbf7e8d9b6",
".git/objects/5d/d401ab419bef0556116b773aa663bd35f5135b": "5fcada3aa69edd6de746a703365e6378",
".git/objects/5d/be123bf42d3509b9d24e6f135d79a1bf652a4c": "6e48b80ec556d898837ff651851226bc",
".git/objects/31/a99c54d4721a9949e9ef84ac416085bc0783b8": "7f576e5276bd37e68daa5a6282111cdc",
".git/objects/31/dd095748570465e1bfd93d651ad04944865784": "534d8fb47b46d7b926ceca035658ee7a",
".git/objects/91/8ff5013a734ee806a002906ceb81941ffacde6": "b11989aa3a884a43abd979e1d0b0f779",
".git/objects/96/becfb50fc24e95f981a06e6d7274c0f78195e9": "7fdf4ab636a3af8e84f9d83ccfef5087",
".git/objects/54/c9d8938bbc85dc2a4642c73bf6bde1116faff0": "949953ef909631ec33d2eefa91e953f3",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/30/4b887b2ab0cc36e1a9a033b3fcd77af33da556": "cf380209f78caf2958c70b0a32c29996",
".git/objects/30/83a1c439f34f9a518e998b4b4dc2adcf8da463": "4975e1943a32b61fdb5fdc4641e25528",
".git/objects/30/4f55122a7e6070391898e36e351a6a3d226a2f": "4db4e8a860efb9ed674aac18d5dec4c7",
".git/objects/37/9dfe1e394094669cfe9276bf6d24de2014b164": "6648eabdf4ead50c215b85953189e9c1",
".git/objects/06/1e7b8d3d01e6ae33b301c1198c5f05b11eb96d": "25c807c1fd79d624fca9fc57d3c50a9a",
".git/objects/06/aa2be1b1306ec9436f67efb7ea17fcc3eb89d7": "e6da124ef00531a0379c74eb22b01db2",
".git/objects/6c/174c8433f12f26d98031b21940500f2014e883": "e3247febb40d24352d34b26476d16ab6",
".git/objects/39/0d080c923df14d04f223ba026a1424f8205697": "2fecd98345f3842f83d3c6778f3ec7e6",
".git/objects/99/45ca3b17a772cc7f54ff346b8c9a844794e9de": "cd0f3ebe93e280b97e768d9a9864fcc8",
".git/objects/99/5617772b3dee8190df558e20c928560f39b3f8": "dd1d9ff2bf4f00e30bba0b6dd9bc54ed",
".git/objects/52/896f461139823daf687cc35421b4042e303fbc": "63a42eee682858c78a1735754a5479b4",
".git/objects/97/b6eee463de5e4fcf79c6570e4173f50eca81d5": "b58977ec52e0607f13c5710fd432ef21",
".git/objects/97/e2025e1bfc6a9e095c4a7fe9ae2be09ed7b43d": "425e50140e275befe6d883867d0b9669",
".git/objects/0a/2ad3a8946718e5da80b8b36f3a970f9203bb41": "493becadfb3c0f3d60727bde4e9f1614",
".git/objects/bf/50a0f97e613c0942b61588f06e658a031a7587": "fcaad4281cb93914825687d9f8e52e9a",
".git/objects/d3/464590a5c52c87d28ac7b0a36662b02e7cf7a8": "113f5404e5ab0b1bc007c2b03a53b105",
".git/objects/ba/8cb00dd5231f1a55de0205c16445926a696526": "be8592f9341c9b01b70890c8614c6cf7",
".git/objects/ba/f4e4c513bc4166074dafac35a6cf0e835f007f": "cb71994e62d78904acf6bca5bb23eff6",
".git/objects/b8/8561246a416ec78218e1e789bfd2cfbd929072": "9c38762f32f99fd038bd4a1183515f38",
".git/objects/b8/1e1f8c695c6c1e87abe9c92f8a2e7bf1f71d9e": "23d445690a9271848d036b9016ae6351",
".git/objects/b1/53a22ef00c9e50f60d1ec4867d07b24d60c0e8": "fff3acc75763afbbb1efa989d0397268",
".git/objects/b1/a5a18eb1e210c9cbb7aecaf7e4a3b517aea1ce": "c3de54f890fa78730569e26293c3361e",
".git/objects/d2/b4149344b0f15b95e17420e60ad78cc2a668d7": "0fc1cd5b26638699ca2bd352c10af6aa",
".git/objects/b7/851a3df51f2ea94ee08b0fda516e9326db8588": "77cbf58e0130ebca06714fad97b923de",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/3f7fe26035eef638cbd739f6103e804e8effb2": "5e9cf0eaccca43e09683a2cfb34beba0",
".git/objects/a8/4bacf313f83ba1790e90c9a2755373813a99c2": "6cfe3fbfbcc21f735d0aa2894076449e",
".git/objects/a8/8b6ca547de98d51cdcd359db4340d2aae4338c": "03fc8c6878a3168d70a59a8142531222",
".git/objects/a8/c60bc7c4daa94a3d2e3914cf2bebeefdc7959e": "611d045f46fb4239997fec430666b902",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/0efadfd3b29e71449fe720b0d503d3a71e78fc": "1e1acdc2ff3aebde051a6ce6c0c9315c",
".git/objects/ea/dd29939b4889f3cba87c6dc7f6078b35d50263": "a75fed71577d3e6a280d3b33b11faa06",
".git/objects/ea/06199f2c530d6ab6bb98869331df5b36f2a89f": "58343208039f939789ec8a028c590083",
".git/objects/e1/9f9be692198775c948d6a1eb8439fb65a190de": "13e04a9c461f0f218c9d70a19565501b",
".git/objects/cd/94b5ded10ed87b5a37ebb0f1f223ca624778f8": "31d5de4e4c0f512fa9b91ab35c07a436",
".git/objects/cc/670e489bd3fc0f39d8b3b7c7d32234ffdb8b63": "82680621e7e8b47d47bb8e6ab466c946",
".git/objects/cc/8e53f1d5e8f4f7a4c88b067794f6fdc2122613": "9f9e9015b5cafe44e4d9910760a36ff4",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/f0/ad0ee1e2f21cd7a8563d4ee2d8c08f09ad83fa": "b6d8fd71f76b782ff5ffacc6c2ed4415",
".git/objects/ff/5798baffadbc05391b5c13e71292aef2207ad2": "4541023f9fe670d02713c724ea4ec889",
".git/objects/c2/4c67eb3e649fb9f105630c93fe27a7b6c9a69a": "a26eb8065d921f22204739f9b457249e",
".git/objects/f6/d2400395e235dc96d514a92dab7945a0ef20b3": "deedb3b174c321874ab8e634651ead04",
".git/objects/f1/ae0723d2454061bb28bf9a8a0b8f14e695bf8e": "38ae7a374f886a0acd6938e383cafbad",
".git/objects/e7/89dd103df07551539dd606c5db6dc58ac044a9": "f082b2355958f34276e756983e5566f5",
".git/objects/cb/9b0ce2c8e34f09687fd20c7a96d96b5562d1bd": "0c66721ad1b573a78ff0445b49499463",
".git/objects/f8/32bb7538f0e63ddc62cf5e70af3cfce3b26534": "8c6f1cc26ec7cab22e8943f98bb6077f",
".git/objects/f8/344880a1a8e716cec5f5974e1fde40889c0649": "3204868069b7f62bb4c6b95e16d9d722",
".git/objects/ce/ce22dc836a096bb309e1e8ee44cbb73793faab": "12db1deac88191a43bd3f868eb43720a",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/46/1b03043bc686efe77a9146c0de660a2fb95bbf": "c2492f5a881f73daacda1b8c95d55f02",
".git/objects/41/0d390aa6b670ed6252093997751d11997bbf1e": "a6720b08f0540d7296114fa98c79d103",
".git/objects/1b/f662e80d9b344de1921cacf5594e7cb186dd81": "edebae00a794b670c5e02ad63abb8e92",
".git/objects/48/33fcf9ba677d3df448c90e63368e50f8bfc8d6": "a5b926fccf641f8e2a09e52478c0d37a",
".git/objects/1e/3764b123d5e6356f4579695936267e4d6b15a4": "526121f8f33c85bab72c591998690b1f",
".git/objects/84/730a3aa66ff0ee5f2b9c823d5bd18998dab426": "57933a65bdd43b91ced5f41e2a34a163",
".git/objects/24/c70d23a52ba61e284b723923f6067d2abf7436": "c29db8cd0d16b77368364dbae0c0fb53",
".git/objects/4f/734b63fb5284f6aadb5b363ad1b5e9ac01e05f": "2c925286f62071fe4549ee3d89aa0081",
".git/objects/4f/d0e51f345ee398d4c56c9a2a36514cfdc54f3e": "d8e976b7b97437231f01681fc40815a3",
".git/objects/8d/4ed48c79c760e04f89a91ce7ee61de6c316212": "86f527d464eff0cfce92d5d39651e59a",
".git/objects/8d/d15c6e9069f1e1625f1fdd2c5cb935c9005911": "aabc777e9e4f492cc28604570a6a6d65",
".git/objects/8d/03e909718b608583329f9b01e69c319cda391f": "2a828d9b9b55c256e074c284f39f0310",
".git/objects/1d/dde23b957262a7b1a9edd8f3b21e5195cff161": "9b4e18f432f9d182d2326695c3f498e2",
".git/objects/1d/83eada777c1ff176e36f71aab8d68dba1d997e": "ec052f4e04839b1b1cb95444d9cfba97",
".git/objects/71/b07ce028e0c59ce947b48d1d92fb7960eaabd8": "6b88078159a0e400836d558a81721d72",
".git/objects/71/de8a35d7a5279979ce998249cc888b61ddb7b0": "188a4dc1200beb85dda1b4441c404c78",
".git/objects/40/8d1161fb142fb4a7c3af3631d3e3f89a5a19ae": "b948ed0fb282aabbbe890c8052c5b239",
".git/objects/40/13eb2bce01a23092fc56f41437be4a20ecd7b5": "f616248d1ccdb0c9dcbc67aca42b4627",
".git/objects/2e/8568a03baf9b5ffedf74a75a515cc415c1d486": "a0ce62ff79c688eee948e98ccf198f67",
".git/objects/2b/789042762d31b98d9a2986128cc761581ff16a": "d5234735b56d8a2efea59baafd34837d",
".git/objects/2b/b3d994b0c1f475fd74410161e398ef04ab5327": "2fce4f40f1925cfc73febd775db0f024",
".git/objects/78/1643ea0753c794a0af131f48b34389faef7a65": "85405c0522fbc7f2a1dcc85bddc6c603",
".git/objects/78/8b37418b645aa221096578a405e4bc19606467": "23159612254b655deeeaf14eb33696fb",
".git/objects/13/2daf294aacbc983f878ec3d59e6c45b99879cf": "607aebcfc4f1df5facc93f0764c51739",
".git/objects/7f/caec385dd2904a9abc450925bfc0c3433f7d84": "9fe63d70c946233be763c4d9ea7ca522",
".git/objects/7a/c656c5cc05ea9f6c7369dc6c64941c5dd55a65": "16bdb83d8b07f5e45ccbdce283a49dc1",
".git/objects/22/ff1b285d2d5a8ce9b35eab48c028e930acf29f": "2e6fb2bd971a4be22f636f6909580a0e",
".git/objects/25/35df3bbf52357574a37cbd9105689336123244": "1e2a27275a7f88007e34013c58fa480b",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "b6de0a5b0fd44f46d8aeed7fc3fa6d47",
".git/logs/refs/heads/main": "e0015c6c47adb2718404b537c60393bd",
".git/logs/refs/remotes/origin/HEAD": "6fcd819f2337bb9b070fc96511f571ae",
".git/logs/refs/remotes/origin/main": "ea3b1d871bae01fe43cfd0768a8c066b",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "a87ab0674b1654de133a85117417d69c",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "a87ab0674b1654de133a85117417d69c",
".git/index": "6e7a26a17a580cea7afc748e542dd0f6",
".git/packed-refs": "6f2fefa8edf3f9f4ffeee679a9ace3c7",
".git/COMMIT_EDITMSG": "bb6b28c64d949247b11158ce74745040",
".git/FETCH_HEAD": "d296a2da9c7f79a9b4b2d626aae7b461",
"assets/AssetManifest.json": "659f4dd93e2bfd5d849d9f7c71ad4117",
"assets/NOTICES": "781dc845fc5e68a74a10f62a3b64bd08",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "fffa13cc1249944e9d40b451165b6265",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/syncfusion_flutter_pdfviewer/assets/squiggly.png": "c9602bfd4aa99590ca66ce212099885f",
"assets/packages/syncfusion_flutter_pdfviewer/assets/strikethrough.png": "cb39da11cd936bd01d1c5a911e429799",
"assets/packages/syncfusion_flutter_pdfviewer/assets/highlight.png": "7384946432b51b56b0990dca1a735169",
"assets/packages/syncfusion_flutter_pdfviewer/assets/underline.png": "c94a4441e753e4744e2857f0c4359bf0",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"assets/AssetManifest.bin": "564877d70f89d1b6b258f2d10eb0444d",
"assets/fonts/MaterialIcons-Regular.otf": "bf79ca4238eb54bbad974060c77bc25f",
"assets/assets/my-picture.jpeg": "8652cf4d0acda1086c45f2fa318691b0",
"assets/assets/Rafik_Gharbi_Resume.pdf": "66650e4d766486329cf23711dfb3f831",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "4124c42a73efa7eb886d3400a1ed7a06",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "f87e541501c96012c252942b6b75d1ea",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "64edb91684bdb3b879812ba2e48dd487",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
