'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "a1c42a859bb6b84c7718081e940517e7",
"version.json": "9b818ca9511483c901bed1545384376c",
"index.html": "0b3ed07fa397d7d6bccf8fbf9bbd9f99",
"/": "0b3ed07fa397d7d6bccf8fbf9bbd9f99",
"main.dart.js": "27f0e0e0a94ebb8ff3c1116bb9e80252",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"README.md": "6f8b4dd4699677bc6eedd9f660defc25",
"favicon.png": "204c0c7b2417a179ed27cfdf8b320ce2",
"icons/Icon-192.png": "34c4c0269cd4642b8442aeecd45d4d2a",
"icons/Icon-maskable-192.png": "34c4c0269cd4642b8442aeecd45d4d2a",
"icons/Icon-maskable-512.png": "6e75cb54e206a6f8e16a766c068e652c",
"icons/Icon-512.png": "6e75cb54e206a6f8e16a766c068e652c",
"manifest.json": "5b370eaf3d5e5978cf7653695b021001",
".git/ORIG_HEAD": "69718258b62de923f712cb69f3ad4c54",
".git/config": "5047e40f1d7c8754a7489ea989f50675",
".git/objects/3e/989998ce60eb44eb95cabb3f6ece366c30f778": "8cef8f9ac71ae00c2c28e3b5cc93d12e",
".git/objects/68/4ebd569fbeb890b1d8d3ce73cfdf3bb4d78022": "5426d825b86be5392670df2e71e30aa0",
".git/objects/6f/792403d0b3595c5199cc4090d22772079d7186": "6859407ccf2bfb74ea5c344bf52ab757",
".git/objects/6f/7de8e13f060980e61f5bb73897251a8a376bb4": "faa2385bc0e6d86227b30b0f50adc4a8",
".git/objects/9b/10a9452ded96110730750cd6fbdcbd04463442": "97c96b7db2be0bd19950ba7146c6ae8b",
".git/objects/9e/3d3e2b3afaa36a4e8ad507229f1509b127cd9c": "3dc95c5aa55222927874b6cac0471074",
".git/objects/04/0559bb18fc5d59a66c254472b7831fe134cc92": "f62b213b8accc0c8d496798c037f383c",
".git/objects/04/e5efc15dc0c60ea2ffcc37c5bf25e96689f44d": "978222f47488835b92838c74cb5c684c",
".git/objects/32/772a54e2451f2faa06fd187596d253ee15367f": "4c98cb3577990547cf55f679fbd295fb",
".git/objects/32/4a4d99873bdc31b64dd422fcc5f1510fe1f54c": "49617eb4714efeb2d75407e086378b30",
".git/objects/69/fff4201312969ff5d7a669d3e8d1ced397f57d": "5560453d2603b0699820a4c29a32fcf3",
".git/objects/56/863187a19ac5d4576c056cd1a2ed508fc01d5a": "9906fe3ff7c8a44079a6bd2a8aecac5b",
".git/objects/56/3033e70c4a07459cd50a04cc709837b856636f": "c39fa3b7aa31b672abfe6df0a69432d1",
".git/objects/56/cb4dce984cefe7485aadbb19f0acd6dc88f5a1": "6f5b4d02f65247736c24bc44e8601cc6",
".git/objects/3d/5cd22a8e20d548547593d1d33cc83724327f8d": "5c72756352d9960ffab135ca2f9b6794",
".git/objects/58/b007afeab6938f7283db26299ce2de9475d842": "6c6cbea527763bb3cdff2cecfee91721",
".git/objects/58/356635d1dc89f2ed71c73cf27d5eaf97d956cd": "f61f92e39b9805320d2895056208c1b7",
".git/objects/0b/b3efcce47e999b424b52ea50cfbeae495511eb": "2fbb642154586b2e3699d289d3f9b783",
".git/objects/94/b52e13bf7919ae4ea7235d78019b592dde8611": "b79fa5ca1cdbf72f253763797850f314",
".git/objects/94/f7d06e926d627b554eb130e3c3522a941d670a": "77a772baf4c39f0a3a9e45f3e4b285bb",
".git/objects/94/66a306218f823545624b67942ae5bdf19deea3": "7ee825e757fe24548f81d4542ec59ea6",
".git/objects/0e/0451c44de16aebd46ca27f1e49932c8b8f20f6": "fc25c91fc04d0a897adb8ae0563a0830",
".git/objects/0e/e3590f4d74c3a4e4621a8d048d01f13436ec7a": "25939fd9f3cb53628d90cf3f4f9a026a",
".git/objects/60/87866d2796de8c5cad48148ba3a2e56ea6e37e": "21fdfc06a388129a5c15af725653a60e",
".git/objects/5a/4047eb61b2922c0681361a9360c9e7cc809045": "fee7c7a36f5daa04df6fe50347d03b8b",
".git/objects/5f/dff99f5b50d9a50448228f8d2a13c08181f86d": "b5c600066e86c0fd8fa0e489f015bf10",
".git/objects/33/f501efc5e5eaa90b54e6de03bc8110130c7d66": "d450e329bd20c993b281e3340814fad6",
".git/objects/05/8ffbc735c7c52307e705f090bf86fb52daf5be": "b340b5952cf2c35f1ba102b9b6d5e0ad",
".git/objects/9c/7431b48fa494324d0c265d783740d1809294f6": "326f446fc1c9bd0e828bba78a706bcd9",
".git/objects/a4/69a0a1d933c373118c29b2498139db00be8372": "f1aa363fc1d64c3818a1551d662afa19",
".git/objects/a3/4625bfeaaf019348b5e3e0844b83bcc77fe475": "fc19ce9b277dfcc248780979968bfeec",
".git/objects/b5/5d7fdaf5142b81e392fbcd4951752342039782": "7a45bac1e7adaebf176d9a6d64d4d278",
".git/objects/b2/65ed4d1aeed8cefebd1168b81a6ffb368b0cdb": "1bb905c1172188cf1c3a2e9fa123dccf",
".git/objects/d9/995526178cc6895855fe9c4e580ad9c714e073": "db1d9eff7513e9d83f7eb318e157ed7f",
".git/objects/d9/fda3829fd9709428fd6301cb1c5209ea877fcf": "1b07453cb85fbbd98ee1bb3a5fd1396e",
".git/objects/ac/be8a36a5c830442717ef9197572c4e8e7f4ae3": "370ea80ded8a1b0df80d5799f3d1a9cc",
".git/objects/ac/9ab4c03e9287cc70a90fb6026c1b4330d4e8a1": "878f120af069681ceadcfb12f0c369a0",
".git/objects/bb/3085876799532613a08c7ebe43f24f0cc46864": "1b6aa21800d948d5513c15e54d131215",
".git/objects/b3/b5ab4858389487f5e89ef8f0be54ea53e4433c": "093c53f6b1104054e9c698e69a45fc63",
".git/objects/b3/ebbd38f666d4ffa1a394c5de15582f9d7ca6c0": "23010709b2d5951ca2b3be3dd49f09df",
".git/objects/df/7f6ddd6bbf2ff8530a4e9f12bdc97887bd2d4f": "ec2915c0375a66ca752d1ad3415351ae",
".git/objects/da/296648f88ec52cb8d22479a538567778bada6b": "dd182538114b9a34232bc06f5c992f2e",
".git/objects/b4/a3ecb9428e2a4b8aff40c099e1c27d64a928f0": "6e4bc29289eb6be950713f1b329eaf0d",
".git/objects/b4/5b5b64d5334eec00ea1c66192d1d08aceda5f0": "9c1d3f593f9a93b97bafd6787888a40c",
".git/objects/a2/9f3710847938376d76bc88e0bfc5c946b07fa5": "2b58f60963fd4b2218ef9f8008878186",
".git/objects/a5/915ed94e062aaf1c0b74f1903a89b3b02e25a2": "d4ad80bcabadd1cdfe32e9a4fbdee113",
".git/objects/bd/9ed80bb8fb97971b6ef2ecc4027715ccd533d9": "2cb8539dc22aae142a3b1b9b988d1789",
".git/objects/d1/098e7588881061719e47766c43f49be0c3e38e": "f17e6af17b09b0874aa518914cfe9d8c",
".git/objects/d1/62320b1f93848cc112013413147ab40139ee4a": "2b0377fa558235623896dd9cc227fad7",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d6/4d639d9ae65241901f5ca556a4294ee4622b7e": "09ae5f3396dd480f8d21beb04b773f2b",
".git/objects/e2/e1214104e89dacea982785ed0928b9c2736cb2": "cb7959e405b3cc5b9cd4b89266b6c9a0",
".git/objects/f3/aad09bbce47c4c1988aa4985942a3ef69ad578": "bbe576d0ab4cf60197a9b6cb9a8f4f04",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/c9/bf8af1b92c723b589cc9afadff1013fa0a0213": "632f11e7fee6909d99ecfd9eeab30973",
".git/objects/c9/059025cfa2c5549174ff44f058853abb4d2193": "2a9f041998bd5b9251de9af9bb95726e",
".git/objects/c9/a3173711d88da556b99b81f575a48fbc186e61": "89340f81e201f0f7fdb7e936322a0514",
".git/objects/c9/f61cfe7cc13511f7d472c2f03842a6d32e79dd": "02d9f905345ea6a4448eee5e14614104",
".git/objects/fd/9d2278a422178a2ae26b9069f861960beb07b0": "ecef8f4fe54c88117f44c43bf70a92fc",
".git/objects/fd/5f40889b9c1653d144a08fcca87dd3424c5c97": "b5a61cc303319becf25f4b5879284c80",
".git/objects/fd/e847169a33890c1049f623772e342d845dccdd": "11373e0d0bb58b9ec067f1e6d4200d08",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f2/4362d19ea8711e096bb741473b95f10dcfca2f": "2b113a466311b5f79d3b2d0ced372128",
".git/objects/f2/6a5344b8d98c87d5399be4b1aac29f80359ad1": "08dfb383b72d07f0025e8a67e3243a47",
".git/objects/cf/a9189765f3324e12167b19288f8241557b244b": "1660e597d11a9ef545334099841d27dd",
".git/objects/fe/e60221216f3038d27e9226dae952b5cea79d9e": "769f11b50eab2e72d97bcefd829aa249",
".git/objects/fe/0a4eb1602b8db5c29d206cb6ba1a188f2e3ac8": "693b4589db8d2cab2455ac1b3c76b33a",
".git/objects/fe/6f95e3af834b8daaa74c1e214683e5adc2483a": "705a2666d5d308ab5fff63e319312ee2",
".git/objects/c8/e604890db389f72ff1ddb02bdec2027b0f2746": "d0a13f8e282befd820098f459cd2e9e7",
".git/objects/c8/89fc2848bd2c166068dfb3da42a3914c7287f9": "e4956e979253ca792d9306388d7b9d97",
".git/objects/c8/a285e59fa08dde5a23bfbfbc4b6ab92499c004": "3766a88f9e54aaff53a426f023565fa5",
".git/objects/ed/99fe2159275eb20f38273009110372f064ea69": "124a191a261aad119948f849b34dae1d",
".git/objects/ed/2ee422d0e11126a20bcb7c6ffef9fcf76fc2b6": "d722e7b6941ea5654cdc5be6c45538e7",
".git/objects/ed/a72c3b3018d6306529f03806c3a77d2d79c97b": "0e274ca4e7ef83b4a651489a96fa22f8",
".git/objects/c1/473a564509aaacc51056985d055f68b868d384": "36751516214f662fc51c9584a3d98153",
".git/objects/c6/c830e9af658bcc642851367dda40dc9603f6cd": "51dee3faae61313e19dcb26072f43fc8",
".git/objects/ec/e1e150a8f880742661df3742ca7eb33abacd96": "617d216c782fc859b0adeb3b8fb46444",
".git/objects/20/b221398f58efabbfb0dbe6132309b4582de323": "6ad07bd7a5fa65c94beb83e9f50e44ff",
".git/objects/20/ce79b604973869b99cc721378b88e38e136227": "f77f2a487d483f81c02594c6e68ca51d",
".git/objects/20/cb2f80169bf29d673844d2bb6a73bc04f3bfb8": "b807949265987310dc442dc3f9f492a2",
".git/objects/20/0f17c8f32b44dc5afbbaa5eeaa580207385f48": "f5fdb30838a6762ea20d87aeec3d18a3",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/18/eb401097242a0ec205d5f8abd29a4c5e09c5a3": "4e08af90d04a082aab5eee741258a1dc",
".git/objects/27/5e0c1faae797fbdc8b4781a5c1abc7b12b411c": "ee43598f4af816ab9608bc571ef5d8a2",
".git/objects/27/38b6588ad8d2f9a1716aadeecc71c37e5899ce": "cfad4496092e60d3f1f91345ff2ec052",
".git/objects/27/33189ccfba31b12fffd963bd7d02840b720763": "7852cf3e8042e57332569cec1969ce68",
".git/objects/pack/pack-e70334aa7ddafd76e0a49cc0eff99cee5041a463.pack": "ea988f000955acb7eee1401e02bc2c41",
".git/objects/pack/tmp_pack_LKcSM3": "10dffda9fcdfcc4e1f75c84edb5196e7",
".git/objects/pack/pack-e70334aa7ddafd76e0a49cc0eff99cee5041a463.idx": "a3bbdb653b244faee37e71a3d37d64d0",
".git/objects/11/5d2b516d2e7979e745fc636322ecc041db56f3": "e0d277d8fc1974c80a043e725a568fa6",
".git/objects/11/3e4a803b530d713eeee1ea7970f7d961cbce52": "e35bb73bfd0d075ae2c36624af29a109",
".git/objects/11/eb834b977c2e4dc011d6a8d9deba50f5565e41": "ee901a82af4ea540c98f80c2fc5312a8",
".git/objects/11/f7c9cfa38d6d09d74226eeba9b7e12ed94c524": "e994424daa99598dbb4b162bd8ff9616",
".git/objects/42/be6cf94ad15a6bbcd20c0041ba6e81328e4e88": "8860966bdd38fc83ccb3597c831c6172",
".git/objects/42/d257f790143fc483ce97f7b34715dd4102edf4": "fc7473abc0e3d56e665524b353017e13",
".git/objects/1f/a447d2b719bfe589c2e32e839b18571fac0f1f": "3bde022112590afefbf221745c194fa8",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/1f/23fb9b86b2d1757bde8caae65e6786b0b875da": "d78e377f7488fbebbc2bacc53e547588",
".git/objects/87/e6644d00a78069a15d16797ad2ee1506f0f749": "4ad0b595b8d76a78dae7c2598f0bba79",
".git/objects/87/b94e4068ba6d917c80469d872a223a16ca9d54": "2cab61873586c1c0580e9dc50bdc80ce",
".git/objects/80/a76af431249b8339048520a975837bf4732b36": "64fe20fb0d8dd804b2cd3dab9bb38fad",
".git/objects/80/a449572fa0d67eb35b3dd6206c2aa8b1329cab": "73f50e03271cfd622c79c5c1f72afe0a",
".git/objects/80/dc0fb92bb706f74a6a7138a298b4136dfaf8a2": "21a6f4b68ebda0ed014ca659b78115c6",
".git/objects/28/5aa4ab7d9160eb310112dc5708ec2070e03144": "0283158e28a25d2d597c25c669884e9d",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/7e/07605cd97f3f46ccfbe7709a1366dc44dec056": "1dbc161df55a6cc10e429fd9f8369eaf",
".git/objects/10/8ebd2eacb6c358bc073d9063a4787229fba7c7": "57415af6bc82eac6f37a546e6a32bbab",
".git/objects/19/088ebe539266b2c25fcffcfe832576c391a616": "e2761198c8192d33e2904e6977ee7b16",
".git/objects/21/1308223ef4f880b2774944e1b665df76b30f6a": "d7cf891cb4cd1c15bf788425963fbdfc",
".git/objects/4d/46450058e6569a125e027efd8fdec4c39c5415": "fdc7748219bdd95ecd71b1d0c81cdceb",
".git/objects/72/7c3cb721dd33abd674a8f166628de3f7617646": "f9e1694120b51f1cd6c02d79fc667ab7",
".git/objects/72/939c522cadb51148ab6c1f00908172d39d9a02": "66511d2129ef5377ca4097de59a2e1ac",
".git/objects/2f/d3e02a73170082cebbc9968b2c94eb6cabc5b3": "0c044f3dbf8354eac99f0d18ab82f205",
".git/objects/43/be0a6b4bb447d7860cf08232b29975757eab61": "abe05742492a4d8470c02008d872e617",
".git/objects/43/e946e398d96aee466fa0aabb625f0889c3a4bd": "ac34520dee747f675e6e0a15c0bbd2be",
".git/objects/88/917d694b9d0ad8bd8c624486e967535d78164c": "1d3dc655c659f734f58ede8df24635ad",
".git/objects/88/c195c9f1826d8dbee867485595c6a846dbee4b": "0eb351f2f9d4d8774bea1369d2df5ec8",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/9f/3f3e9d15471123916fa63a817de4cae428b699": "0a448288cc62033c915eaec5106eec6f",
".git/objects/9f/36308eb596e2de69f396394187dbf30da8e7e4": "b8416ef70727cd1aaa8f7f27a756e38b",
".git/objects/6b/3d34046d65901ce4e1cb5e936d9db730bdfff9": "1d669889cfab184df2fa26ec9748a850",
".git/objects/6b/e2c81540556d3fdd4922ee93dc49cca8c0b3da": "a029082e1242c4d46716c4a9818c029d",
".git/objects/38/2016f728ea0283c7adf86c4b51d0c3841730ba": "e28cfa0c742987250ef4f28f785fe43c",
".git/objects/00/dad241f53b45e05e5e30343bb98bc51d767753": "4775f5197855346cf8b090fa9b7d5f62",
".git/objects/00/5955d23285e8b5cf935cbf21c0be3c195f6972": "9a2ebc221eac102bc95d111609a688eb",
".git/objects/9a/d07050f2104d8508c2870dddbe020cfc692056": "4e828b8698697872f0edf36b5aa61a70",
".git/objects/9a/4ed5125c5ab19a4cd548ba699e9a0d36c79d76": "98bf1a9914f053ee1f84febbfbec5552",
".git/objects/9a/02a96ccc9006771d25254d55f7f16b408259a9": "5cca2babd977d46a00134b39a038f160",
".git/objects/5c/0e39579605f5c8e7ac25397d94954defb362f7": "4dd1b49e03f4d470f386c5098c055b4b",
".git/objects/09/4bb6ae24f0cd847d40cb4cc4a2434f2ec9b83b": "b9e6d850322c11db635bcf0a45b762ff",
".git/objects/09/a1ce13143e9528d8495abcec153a63b5ae73cb": "1b5037c88b76c18635998aa4f819c273",
".git/objects/62/1d2c8f1737421194b6648d6f9a61927a683eaf": "b68f8cb0299d6a09907ed2e58c1054c0",
".git/objects/54/ddd96fb94ec507634cafb02774c78f6d10a431": "b1763b5c7ff1668eaafbc20df93f22c5",
".git/objects/98/d7d0bfcde622383df2fa969ac5c7fb04f9fb39": "a58647d0874213db9c39c2bf0eb57247",
".git/objects/98/aa9846357e50616c74e42852b3fb2ea5211b1d": "eb5eaabc241f600cb58717323614da59",
".git/objects/98/7f670658700af37b5732b15a82e434dbd58c23": "ef1cb3074d5c920c337ff352c3f68a79",
".git/objects/53/d6c3d41208e91315467794e205f6f39f7e3be0": "ffb36ddfdb1b7a216518e4675d090cdd",
".git/objects/3f/78dbc4e6ec5f5f8e472ddf5da1ed3b01b4d76e": "de12efef4a74afd9899277032c37952c",
".git/objects/30/6942dc5bda024438722d4da845f397d2b10e14": "682a06660c7a1bece06811374e7444ab",
".git/objects/5b/a31298d2d513fb07cc02bfee40af8b2606e24c": "dc732fbf5a67cb65cd44744227f93da6",
".git/objects/08/ae66d67d7985395e287043d086ff870c53dd8e": "ea268b98df56342237f81fad6540968e",
".git/objects/6d/f2b253603094de7f39886aae03181c686e375b": "4e432986780adf1da707b08f0bc71809",
".git/objects/6d/8585fefac2648a0ee191f2a184387f0a682afa": "f87b8092693cb1cae904f8f3212d389a",
".git/objects/6d/548ded1cfc37cde02e8762ee13112f5d4abac1": "93d42364e3a1985394062866b887de3a",
".git/objects/01/d8c2fa3e11284b520bcba5240e37d57f388416": "f6c3ce0b89b08ed06afaec1491e01dcf",
".git/objects/6c/174c8433f12f26d98031b21940500f2014e883": "e3247febb40d24352d34b26476d16ab6",
".git/objects/39/beeb3e3fbe4f6573ad42946b1c81e5301c4047": "5adefec2579c585c60bc945604bd9e95",
".git/objects/99/842ffb3c5c57a634c265858c8f618bf2e29889": "1ef1ed0b3aa7370729778566acb2df7d",
".git/objects/52/896f461139823daf687cc35421b4042e303fbc": "63a42eee682858c78a1735754a5479b4",
".git/objects/97/b6eee463de5e4fcf79c6570e4173f50eca81d5": "b58977ec52e0607f13c5710fd432ef21",
".git/objects/97/e30ddd034dcf1447817bd4a1a32fa7e7f18ec2": "0b79d8e48f335732e3edd845246ee3cf",
".git/objects/0f/b75ef4a4b3eb1311c1bbcd6bf0f25653ae112d": "5c97d3c4382450b995fd2bf0b10b6c42",
".git/objects/0f/f8d62afbf2343a631c94c89cde0717bb251a4b": "0fa05ba5562c52b3424818cece312424",
".git/objects/0a/7903fe24b93de0c75a54b47419dd94e57429db": "b84db435f0e0fe809a97a97eac621d78",
".git/objects/bf/23ae54d8fe3686d85ddaf7dc84357c66a8406b": "0f40206cffa4801c37c439ebd390a9d5",
".git/objects/bf/96f62b22656e92321c4775867d24a02eaa6f48": "deaebfdc4ca03df3d48fe8601dd178d9",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d4/b7e084b3fd2c81e5d5ddb025f14592c6141116": "54b1034495abbf10b67882a1d779d670",
".git/objects/d4/301a46c3222fc6b48fa4841f7def2a3d8e1b29": "139ce2b0e6a1c0695c20a6dd67e89afb",
".git/objects/ba/05d654c9757b9d4b5e6a7ca488b474abdd6f6d": "51697c9e29be6900676cfa4a88f2645b",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/a7/da62fd54aae67935dfd9d454cda90a4e1de848": "4f77b605ff345f4d42f3033683884cc6",
".git/objects/a7/563c55ca6445416a25d48c70576ee83e2791e1": "b3b747962a3f1075a6a22df7b4c75f51",
".git/objects/dc/d93507c30400a1ba20f5362487094b9d2ae643": "25c64f3b6739ae132bb5aa7391ba53cc",
".git/objects/b6/704154c7a871df49b92f8ed054279d54014c0e": "1eba3c5b83088fe4bec0c5f07d034d94",
".git/objects/a9/18af8eb53a56906b21d8ac072aa85bfaad0434": "e5fb9fa3ec345c8a7866444baa865045",
".git/objects/d5/2efd2d64accf9d4ec3d19afa3fd24c7f1cc812": "03f837d5a88d2aa85658f9b498693e74",
".git/objects/aa/bf49c2495b3ef25069be2837663ea5b7d951f9": "49a74541f88274d54c959847dd3c553a",
".git/objects/af/d01ec66ff9d1cddfa49b228251128a8d02935a": "c257fc0d4b4460381d1b9072bd7ee7f4",
".git/objects/af/a7406d5e81ee10a589c6500a631978a5c6cf07": "e72033fdbe9d6e08c1b0214b94ded9a2",
".git/objects/b7/7a568f865562c043eeee5c2d1053971b479ba7": "266d624591b47d24b271daf85e39c2f6",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/c28350e83ab89e03dae0ed264ceaaacd324da5": "f36ea339ac7f1b7e05e2b76e5063483d",
".git/objects/db/30d60acd3ca8f7ce34034ba49e967c583265bc": "f507e0a4abb93608a11cdf24e264d32b",
".git/objects/b0/86d4523bb183eaf9de19eed61e67f8c9102654": "3e0ee92ae626b646d0a3bdec0c950149",
".git/objects/a6/fc0784fe37351d7f0f635e4206767666b8cb25": "41c973f5c47b4da0296d10b3956dd2f0",
".git/objects/b9/f3492df2246ac74a35c1cf49ec8590c46f0c37": "89496a3087b2c3dbecc6c6bc2f6dfa53",
".git/objects/b9/0efadfd3b29e71449fe720b0d503d3a71e78fc": "1e1acdc2ff3aebde051a6ce6c0c9315c",
".git/objects/ef/8e9dceb6366edcf053c94502f4edb91b9dedeb": "30e36fcff589656a59fc8460a403bf60",
".git/objects/c4/dc3b77b46e2a1ea9f611d7df572ba3b8d4cd77": "e2b99a0421111ac59b41d8945ab9d660",
".git/objects/cc/9123abee978a40b1773fb7683de41f446e5080": "07532db02706797dac832030fb9c506b",
".git/objects/e6/d26dade4b85ddc772302411f1c66fa6b35b72a": "98e94e2668d2963430468e2c5a44620d",
".git/objects/e6/8f0f367526d1d04ea4e68e28961d4d796aca74": "f53fa775fac49d1cc7cf11b476af6b79",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/f9/ded8e5006686627ece27a2660d4c9961e45e7b": "7078ef2d3263bf42067e0f3963e2fb3f",
".git/objects/f0/60b7d8284e72e4d027cb088f2e9dce87ca4d3e": "d5bc12a34ee54c0994d6476ed499e853",
".git/objects/f7/5c3f1eb18ff377b4d3747601405494649ca7a5": "1f191a102bbfa3e6153cdc5b58fe2c4a",
".git/objects/e8/d3fbec6baf449eb914c6342a85d3c51d12a17f": "06b6245b41b9ffb98c2d67ab0eee28d6",
".git/objects/e8/595265d785ac4e3887cf8a66ab417baff8bcd1": "97f22d1416bf100e814fce60ae134d18",
".git/objects/ff/5c9b655710f660df338eb57710e3bae217f68a": "3c0173518a3542a9fbc550d602477ab0",
".git/objects/c5/1117aa896c4762e16c0669eb92c04a9d973cf4": "d96cf8afab429153b51965151241033f",
".git/objects/c2/2442a1e0f6703b00a1eb062af9c610957ce0ee": "7ddbb876430a01b7429c5ade13485e32",
".git/objects/f6/812200740e43f776a93594b045420163d375e2": "6cad3868bfee1fb9ea16136322edc913",
".git/objects/e9/e7de1d5a87a95176f3b937dec4005a49692a3e": "157bfb31030bcdb983fff909723bd0ac",
".git/objects/ce/746abd8b0863cef8641437e05c6c176c32ea12": "3b64290e9635e95dac300ab9305a1f3e",
".git/objects/ce/c56b0e8063f058c513369584f72924536bb9b4": "7ffed6d5020b39e619b7f92ec0b9e96a",
".git/objects/ce/4529fc5ccab04a71c4122b43e008592cd970aa": "7efa64ab5e15b377f0d41355e6a845b6",
".git/objects/e0/855f3cd01098585ba3368c815979a20ad21edf": "3184174ab332f2248e8cc852298b591e",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/46/fe8da0860dd6fd498efc7049d6646652bb97c2": "f6e9ea0ef49983d3595442dc8b496e57",
".git/objects/79/aa17fdd014d1b414d23b18bfc0c07e4f9e159c": "ce7414203edc84f0bb2b381d747df837",
".git/objects/2d/f2823ef3895e155a91b04f747431879ec52615": "1d93d34b3bac8a63c8651fbe0f5515b5",
".git/objects/41/3c01b48bf5f26fc05bf7343a86e3ce4a3bb988": "db4c84f7449001e9b829b539934d30f3",
".git/objects/83/1d38dd238f626ad51d51de773b426a116799eb": "282968e2ca7beb7065901831f55014e6",
".git/objects/1b/f662e80d9b344de1921cacf5594e7cb186dd81": "edebae00a794b670c5e02ad63abb8e92",
".git/objects/77/c612a46958abec717270c81cdf6428475f90f4": "896abf9bd79dbf1bd9e85c3faf1f197e",
".git/objects/48/33fcf9ba677d3df448c90e63368e50f8bfc8d6": "a5b926fccf641f8e2a09e52478c0d37a",
".git/objects/4f/d0e51f345ee398d4c56c9a2a36514cfdc54f3e": "d8e976b7b97437231f01681fc40815a3",
".git/objects/4f/6e56961b8ed5708a55f1c484cb735871ba7ca1": "68ef1087367593f5658c0f0741c6b7cc",
".git/objects/8d/30570df9a8bc8509605e9d2414f6f1e4515e8f": "e956514505926efc751bde99e91ff37b",
".git/objects/8d/7cc62dc10fe535d71435a7dfa0f3c22106593f": "c3adda94d2bb6849757a4c4c2e97b53b",
".git/objects/15/154051a37cd9bd18ab16c6e9ed155d82a61de5": "d5e309378f6a523adac7e5e6d678e799",
".git/objects/12/a6d370d25cbf5646d9213ee304a75d8fab0d2b": "f919a82350ccbf07459d4fd79101b33e",
".git/objects/8c/c89674cf34215dcca409efd68d1d9d6c73d20e": "2061236e93763c61419a960c29b1b307",
".git/objects/85/823b38090ddd17309c55d1c4ec1c4fde82bdfd": "e9a3b132d2e1748f7994a74d1e33bcf5",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/1d/db8fa7f275de81f34a7efcf8bb8bb2f5ee91b5": "620b70c21f268f9689c68122a729fd65",
".git/objects/71/3f932c591e8f661aa4a8e54c32c196262fd574": "66c6c54fbdf71902cb7321617d5fa33c",
".git/objects/76/e759d7ab8e42628ee61f5c2fff41dd13e9011f": "13bb9c4bac1895b5bba7f9de8083d1e9",
".git/objects/49/adebdb511c8c293b28db3f6792e5bac28cdc32": "ba6a3971e7f06834fd6ec3844372ce17",
".git/objects/49/488a4a126beda9d77d213a639ff9ca31619954": "eac9ba4d128de524d43b5dc95b889951",
".git/objects/2b/2230ce95fd74dbd8f713307a3c0326f4f2ad20": "726e2a0b41c71ce902d912d5170979ad",
".git/objects/2b/e39c7fd3da441ddac9bea54fd12621dd39960a": "24031b20667d22ca8dba4debe8b9eab5",
".git/objects/47/d084a13e7affbb541d5d8e054eb48fe81ae399": "1e06076f79fbdc68c7b9d123be5c1d04",
".git/objects/78/0afc964d3af550a2f19c1ab207438bfff9597a": "035ee797bfe5ce3c1e428bf6d6f4b1f8",
".git/objects/7f/e849d945d262a85da0256a127e78342024a2a8": "1e652af003dc1200286df0cf3b4784fa",
".git/objects/7a/03f52ca8cb6dfb011713fb650572e4cbe80edc": "140ba9d17d52d25e12ba57f777fed472",
".git/objects/14/0ac15bc7dec74bc383c51799562acacd342e7c": "3b653e8d4f5b0b2636f18dd77c7721ec",
".git/objects/14/527d48e937a83f722e1ab9cb6103dbc7147647": "3f0def1b65811187f1a91cb90ba6fd04",
".git/objects/14/328a45372165debfdebfb6b27ed8aef1044f43": "72d8219067e9bea2e3f0e14ea5fda7f2",
".git/objects/8e/f0c2144b4cda1045420eb2a6106087c2c6f38a": "e58fc54af7432a7af0fdc89c2ec7984d",
".git/objects/22/edf56704742b66ce68c69a1770fbd9428f289f": "11d753287a54918215347c90dc72fa8f",
".git/objects/22/95fc933847e7aa0ed904506bf873863cbeb17d": "1c9a82f86876ff92b58b8156ba00d41c",
".git/objects/25/317a16d5b54b231863265c913bd578b32f483e": "ebb3791613c6ef6987af5043dfd5b6a8",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "2620d8978891cb5e5fc9b53a01d9c63a",
".git/logs/refs/heads/main": "ac6f7686d823e001d6461af0da4664a0",
".git/logs/refs/remotes/origin/origin/main": "c9c18973ffbf4b4529dc35020cc09412",
".git/logs/refs/remotes/origin/main": "3c39bebcc97aa1e17e562c7782778734",
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
".git/refs/heads/main": "69718258b62de923f712cb69f3ad4c54",
".git/refs/remotes/origin/origin/main": "c80072e4c3d25967f443421522c041b1",
".git/refs/remotes/origin/main": "69718258b62de923f712cb69f3ad4c54",
".git/index": "bfbaa158f54ddda5bb6442a5b74fa1fb",
".git/packed-refs": "a891e6bb26eb0d480aef486a7e8ea166",
".git/COMMIT_EDITMSG": "7861fdf36a9227f825bd486a335855f6",
".git/FETCH_HEAD": "134e17078f5c4bb6e7b499725585015c",
"assets/AssetManifest.json": "43cdd1d887e30caff5545d2aca2e0720",
"assets/NOTICES": "5faeb39619396e4ed9c67aa91af56a6e",
"assets/FontManifest.json": "866b9b20ab0e8c30ffe220d2a2d66abe",
"assets/AssetManifest.bin.json": "c3a0d97baea23038b387966b94a86fd2",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/syncfusion_flutter_pdfviewer/assets/squiggly.png": "c9602bfd4aa99590ca66ce212099885f",
"assets/packages/syncfusion_flutter_pdfviewer/assets/strikethrough.png": "cb39da11cd936bd01d1c5a911e429799",
"assets/packages/syncfusion_flutter_pdfviewer/assets/highlight.png": "7384946432b51b56b0990dca1a735169",
"assets/packages/syncfusion_flutter_pdfviewer/assets/underline.png": "c94a4441e753e4744e2857f0c4359bf0",
"assets/packages/syncfusion_flutter_pdfviewer/assets/fonts/RobotoMono-Regular.ttf": "5b04fdfec4c8c36e8ca574e40b7148bb",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "480a92d37534f341d433b331e21a7976",
"assets/fonts/MaterialIcons-Regular.otf": "d4f77b58f6cdada6114faf231cdf4225",
"assets/assets/my-picture.jpeg": "8652cf4d0acda1086c45f2fa318691b0",
"assets/assets/my-picture-no-bg.png": "ee567815035de1c2f427aa88babe7622",
"assets/assets/projects/sahti/8_add_list_chat_pharmacist.png": "1bbd5337fea1ee7071611aee4e99a6c2",
"assets/assets/projects/sahti/7_pharmacist_home.png": "5b065e3a4d6d2233897b7ff1f14dba35",
"assets/assets/projects/sahti/5_manage_reminders.png": "02c6c8b1fd9240f22e88be6d8a0ecc91",
"assets/assets/projects/sahti/11_bi_dashboard.png": "64418cef5ec05e51cb5d26d4eab8da3b",
"assets/assets/projects/sahti/1_default_picture.png": "e8e5d1f7ed10047b7c0e11d7b5fb03d2",
"assets/assets/projects/sahti/2_login_signup.png": "ceeb75ae8814a6a7a1ac89e26ea51af9",
"assets/assets/projects/sahti/3_search_doctor.png": "7004292a83e40a54dc484344cd90e7b7",
"assets/assets/projects/sahti/9_admin_home.png": "8242b686a41ada302800e13dfcce0f4f",
"assets/assets/projects/sahti/6_chat_conversations.png": "0a22ca0d9b41230d84992b4ab7d6d9a1",
"assets/assets/projects/sahti/10_add_nurse_doctor.png": "12176bc15e3c83bf689ff2c6a08c9dd6",
"assets/assets/projects/sahti/4_search_nurse_pharmacy_drug.png": "b1a47cbb87517227bb3281bd5967373c",
"assets/assets/projects/tesa_ranking/3_tournaments.png": "099b34e930cfbf4679802001b7f59f27",
"assets/assets/projects/tesa_ranking/4_players_biography.png": "f6cd32f01ffe38266b5173e693095412",
"assets/assets/projects/tesa_ranking/6_videos.png": "ff23cc59170680e47f0dcc1e6eeb2d0c",
"assets/assets/projects/tesa_ranking/5_ranking.png": "f7d81472a9df8f549d1fffd8660e668a",
"assets/assets/projects/tesa_ranking/2_news.png": "beafb3b5f016bd0f82559e115741834a",
"assets/assets/projects/tesa_ranking/1_default_picture.png": "8173cd237dc0859f090c0732db75291a",
"assets/assets/projects/confidential/1_default_picture.png": "d4cc2764b0fd8a2a8798ccb48e767472",
"assets/assets/projects/attadabor_fi_quran/4_my_dictionary.png": "fe050182032727a67aed18238d8ea41b",
"assets/assets/projects/attadabor_fi_quran/2_verse_menu.png": "6ac1c7cfe21e39438d3bfdb55013b989",
"assets/assets/projects/attadabor_fi_quran/3_categorization.png": "3292bb6659e3f31404c2864b4a98e935",
"assets/assets/projects/attadabor_fi_quran/5_my_categories.png": "556846f2713ee3fc2ae7a755dd56c96e",
"assets/assets/projects/attadabor_fi_quran/1_default_picture.png": "a84fbc24ba32ed0fa55595c64b96f329",
"assets/assets/projects/my_budget_tracker/6_categories.png": "8d6364bb8183fa63d02d50a0f423e395",
"assets/assets/projects/my_budget_tracker/2_budgets.png": "89e5a8c90f4c12112fe23d5639164362",
"assets/assets/projects/my_budget_tracker/3_stats.png": "c03ada73345bf7c6df7689bcfbff2cfa",
"assets/assets/projects/my_budget_tracker/5_accounts.png": "87e2d23db64aba4efe06e3d5275da3ac",
"assets/assets/projects/my_budget_tracker/1_default_picture.png": "56924be22750ae03889fb9b387c50056",
"assets/assets/projects/my_budget_tracker/4_tools.png": "bf79cdb892ff990353861ddb7b88458d",
"assets/assets/projects/my_budget_tracker/7_recurring_reminders.png": "72b3fb1794febb2e95d3085ec90277e8",
"assets/assets/projects/weekly_planner/5_settings.png": "628c6fe9512243eedf6c9eaad65a69db",
"assets/assets/projects/weekly_planner/3_current_day.png": "e738e8e3c3804e5f120a4fd15bb69374",
"assets/assets/projects/weekly_planner/1_default_picture.png": "ce58b869bbdde3dfcf00b4844e39aba8",
"assets/assets/projects/weekly_planner/4_task_details.png": "2d4ba34cb07621f24b6741b9f18a127c",
"assets/assets/projects/weekly_planner/2_weekly_planner.png": "51eb6fd959047c7c6ee73cbd5a600aaa",
"assets/assets/projects/the_landlord/9_contact.png": "f6afdef21065d0b4860dea3adc0b10e5",
"assets/assets/projects/the_landlord/4_details_amenities.png": "3f952438a07ee75ba86594b9529d8e80",
"assets/assets/projects/the_landlord/7_profile.png": "92b4434f2f565f971a50b4d6f17e5b73",
"assets/assets/projects/the_landlord/3_details.png": "da5e26c4e3bce2e7bf934f54eb0cf3b1",
"assets/assets/projects/the_landlord/5_details_reviews.png": "75a1855eb0813797fbd38f7dfbc4379c",
"assets/assets/projects/the_landlord/6_prepayment.png": "9d7374030efb0ce4b6641abeb0ff0894",
"assets/assets/projects/the_landlord/8_chat.png": "8be9f938d8f0b4e9092ba9b035bc9487",
"assets/assets/projects/the_landlord/2_login.png": "3b771d83be3bd014ab572a0435f3cb58",
"assets/assets/projects/the_landlord/1_default_picture.png": "45a03528729c78cc0d6d3b4b09a16458",
"assets/assets/projects/randev/5_work_schedule_screen.png": "3848296c5099e6eb27dddfd16008af19",
"assets/assets/projects/randev/2_store_details_screen.png": "01f1c9e4703666a424fe0401067d022d",
"assets/assets/projects/randev/3_booking_screen.png": "197975a1209b1b4621a65dae9f685c33",
"assets/assets/projects/randev/4_create_store_screen.png": "c55efc71f8ecceb535eeea406906468b",
"assets/assets/projects/randev/1_default_picture.png": "99e089c5fb5437d98ab67c053e38cfc7",
"assets/assets/projects/bi_dashboard/3_charts_list.png": "dd864ad9a74432cdd0441cadffea91a1",
"assets/assets/projects/bi_dashboard/2_welcome.png": "080c63622b4123e8a84aca4982e62626",
"assets/assets/projects/bi_dashboard/1_default_picture.png": "a79112fedca5e749b941749cf8b91ad2",
"assets/assets/projects/bi_dashboard/4_add_chart.png": "cb1e5c0bcfec2ad8d6260070b9862841",
"assets/assets/Rafik_Gharbi_Resume.pdf": "3829a5c5a152a24ef3c52f3b77fe092b",
"assets/assets/my-projects.json": "cea37c4f89371d333fe4d71fd7ddb92f",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
