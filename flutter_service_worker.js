'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "9b818ca9511483c901bed1545384376c",
"index.html": "ebd8c6fe56e8c80e5e3165e1c464cfe1",
"/": "ebd8c6fe56e8c80e5e3165e1c464cfe1",
"main.dart.js": "903b35ac62a83de59c52e0cbd8d6d5e7",
"flutter.js": "7d69e653079438abfbb24b82a655b0a4",
"README.md": "6f8b4dd4699677bc6eedd9f660defc25",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "e2b9103aaafaf8ed9f90576c9d9a1341",
".git/ORIG_HEAD": "c6d29e4d39e1d2feef7b004e07c24746",
".git/config": "3a5a8dd35b4f3897e77718982395b9fe",
".git/objects/68/4ebd569fbeb890b1d8d3ce73cfdf3bb4d78022": "5426d825b86be5392670df2e71e30aa0",
".git/objects/04/e5efc15dc0c60ea2ffcc37c5bf25e96689f44d": "978222f47488835b92838c74cb5c684c",
".git/objects/32/772a54e2451f2faa06fd187596d253ee15367f": "4c98cb3577990547cf55f679fbd295fb",
".git/objects/32/4a4d99873bdc31b64dd422fcc5f1510fe1f54c": "49617eb4714efeb2d75407e086378b30",
".git/objects/69/fff4201312969ff5d7a669d3e8d1ced397f57d": "5560453d2603b0699820a4c29a32fcf3",
".git/objects/56/cb4dce984cefe7485aadbb19f0acd6dc88f5a1": "6f5b4d02f65247736c24bc44e8601cc6",
".git/objects/3d/5cd22a8e20d548547593d1d33cc83724327f8d": "5c72756352d9960ffab135ca2f9b6794",
".git/objects/0b/b3efcce47e999b424b52ea50cfbeae495511eb": "2fbb642154586b2e3699d289d3f9b783",
".git/objects/94/b52e13bf7919ae4ea7235d78019b592dde8611": "b79fa5ca1cdbf72f253763797850f314",
".git/objects/0e/e3590f4d74c3a4e4621a8d048d01f13436ec7a": "25939fd9f3cb53628d90cf3f4f9a026a",
".git/objects/5a/4047eb61b2922c0681361a9360c9e7cc809045": "fee7c7a36f5daa04df6fe50347d03b8b",
".git/objects/33/f501efc5e5eaa90b54e6de03bc8110130c7d66": "d450e329bd20c993b281e3340814fad6",
".git/objects/a4/69a0a1d933c373118c29b2498139db00be8372": "f1aa363fc1d64c3818a1551d662afa19",
".git/objects/b5/5d7fdaf5142b81e392fbcd4951752342039782": "7a45bac1e7adaebf176d9a6d64d4d278",
".git/objects/d9/fda3829fd9709428fd6301cb1c5209ea877fcf": "1b07453cb85fbbd98ee1bb3a5fd1396e",
".git/objects/bb/3085876799532613a08c7ebe43f24f0cc46864": "1b6aa21800d948d5513c15e54d131215",
".git/objects/b3/b5ab4858389487f5e89ef8f0be54ea53e4433c": "093c53f6b1104054e9c698e69a45fc63",
".git/objects/b4/5b5b64d5334eec00ea1c66192d1d08aceda5f0": "9c1d3f593f9a93b97bafd6787888a40c",
".git/objects/a5/915ed94e062aaf1c0b74f1903a89b3b02e25a2": "d4ad80bcabadd1cdfe32e9a4fbdee113",
".git/objects/bd/9ed80bb8fb97971b6ef2ecc4027715ccd533d9": "2cb8539dc22aae142a3b1b9b988d1789",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/e2/e1214104e89dacea982785ed0928b9c2736cb2": "cb7959e405b3cc5b9cd4b89266b6c9a0",
".git/objects/f3/aad09bbce47c4c1988aa4985942a3ef69ad578": "bbe576d0ab4cf60197a9b6cb9a8f4f04",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/c9/f61cfe7cc13511f7d472c2f03842a6d32e79dd": "02d9f905345ea6a4448eee5e14614104",
".git/objects/fd/9d2278a422178a2ae26b9069f861960beb07b0": "ecef8f4fe54c88117f44c43bf70a92fc",
".git/objects/fd/5f40889b9c1653d144a08fcca87dd3424c5c97": "b5a61cc303319becf25f4b5879284c80",
".git/objects/cf/a9189765f3324e12167b19288f8241557b244b": "1660e597d11a9ef545334099841d27dd",
".git/objects/fe/0a4eb1602b8db5c29d206cb6ba1a188f2e3ac8": "693b4589db8d2cab2455ac1b3c76b33a",
".git/objects/ed/99fe2159275eb20f38273009110372f064ea69": "124a191a261aad119948f849b34dae1d",
".git/objects/ed/a72c3b3018d6306529f03806c3a77d2d79c97b": "0e274ca4e7ef83b4a651489a96fa22f8",
".git/objects/20/b221398f58efabbfb0dbe6132309b4582de323": "6ad07bd7a5fa65c94beb83e9f50e44ff",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/pack/pack-e70334aa7ddafd76e0a49cc0eff99cee5041a463.pack": "ea988f000955acb7eee1401e02bc2c41",
".git/objects/pack/tmp_pack_LKcSM3": "10dffda9fcdfcc4e1f75c84edb5196e7",
".git/objects/pack/pack-e70334aa7ddafd76e0a49cc0eff99cee5041a463.idx": "a3bbdb653b244faee37e71a3d37d64d0",
".git/objects/11/5d2b516d2e7979e745fc636322ecc041db56f3": "e0d277d8fc1974c80a043e725a568fa6",
".git/objects/1f/23fb9b86b2d1757bde8caae65e6786b0b875da": "d78e377f7488fbebbc2bacc53e547588",
".git/objects/28/5aa4ab7d9160eb310112dc5708ec2070e03144": "0283158e28a25d2d597c25c669884e9d",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/7e/07605cd97f3f46ccfbe7709a1366dc44dec056": "1dbc161df55a6cc10e429fd9f8369eaf",
".git/objects/21/1308223ef4f880b2774944e1b665df76b30f6a": "d7cf891cb4cd1c15bf788425963fbdfc",
".git/objects/4d/46450058e6569a125e027efd8fdec4c39c5415": "fdc7748219bdd95ecd71b1d0c81cdceb",
".git/objects/72/7c3cb721dd33abd674a8f166628de3f7617646": "f9e1694120b51f1cd6c02d79fc667ab7",
".git/objects/43/e946e398d96aee466fa0aabb625f0889c3a4bd": "ac34520dee747f675e6e0a15c0bbd2be",
".git/objects/88/c195c9f1826d8dbee867485595c6a846dbee4b": "0eb351f2f9d4d8774bea1369d2df5ec8",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/9f/3f3e9d15471123916fa63a817de4cae428b699": "0a448288cc62033c915eaec5106eec6f",
".git/objects/9f/36308eb596e2de69f396394187dbf30da8e7e4": "b8416ef70727cd1aaa8f7f27a756e38b",
".git/objects/6b/e2c81540556d3fdd4922ee93dc49cca8c0b3da": "a029082e1242c4d46716c4a9818c029d",
".git/objects/38/2016f728ea0283c7adf86c4b51d0c3841730ba": "e28cfa0c742987250ef4f28f785fe43c",
".git/objects/00/dad241f53b45e05e5e30343bb98bc51d767753": "4775f5197855346cf8b090fa9b7d5f62",
".git/objects/9a/02a96ccc9006771d25254d55f7f16b408259a9": "5cca2babd977d46a00134b39a038f160",
".git/objects/98/d7d0bfcde622383df2fa969ac5c7fb04f9fb39": "a58647d0874213db9c39c2bf0eb57247",
".git/objects/98/aa9846357e50616c74e42852b3fb2ea5211b1d": "eb5eaabc241f600cb58717323614da59",
".git/objects/3f/78dbc4e6ec5f5f8e472ddf5da1ed3b01b4d76e": "de12efef4a74afd9899277032c37952c",
".git/objects/5b/a31298d2d513fb07cc02bfee40af8b2606e24c": "dc732fbf5a67cb65cd44744227f93da6",
".git/objects/08/ae66d67d7985395e287043d086ff870c53dd8e": "ea268b98df56342237f81fad6540968e",
".git/objects/6c/174c8433f12f26d98031b21940500f2014e883": "e3247febb40d24352d34b26476d16ab6",
".git/objects/52/896f461139823daf687cc35421b4042e303fbc": "63a42eee682858c78a1735754a5479b4",
".git/objects/97/b6eee463de5e4fcf79c6570e4173f50eca81d5": "b58977ec52e0607f13c5710fd432ef21",
".git/objects/d4/b7e084b3fd2c81e5d5ddb025f14592c6141116": "54b1034495abbf10b67882a1d779d670",
".git/objects/d4/301a46c3222fc6b48fa4841f7def2a3d8e1b29": "139ce2b0e6a1c0695c20a6dd67e89afb",
".git/objects/dc/d93507c30400a1ba20f5362487094b9d2ae643": "25c64f3b6739ae132bb5aa7391ba53cc",
".git/objects/a9/18af8eb53a56906b21d8ac072aa85bfaad0434": "e5fb9fa3ec345c8a7866444baa865045",
".git/objects/aa/bf49c2495b3ef25069be2837663ea5b7d951f9": "49a74541f88274d54c959847dd3c553a",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/a6/fc0784fe37351d7f0f635e4206767666b8cb25": "41c973f5c47b4da0296d10b3956dd2f0",
".git/objects/b9/0efadfd3b29e71449fe720b0d503d3a71e78fc": "1e1acdc2ff3aebde051a6ce6c0c9315c",
".git/objects/ef/8e9dceb6366edcf053c94502f4edb91b9dedeb": "30e36fcff589656a59fc8460a403bf60",
".git/objects/cc/9123abee978a40b1773fb7683de41f446e5080": "07532db02706797dac832030fb9c506b",
".git/objects/e6/d26dade4b85ddc772302411f1c66fa6b35b72a": "98e94e2668d2963430468e2c5a44620d",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/e8/d3fbec6baf449eb914c6342a85d3c51d12a17f": "06b6245b41b9ffb98c2d67ab0eee28d6",
".git/objects/c2/2442a1e0f6703b00a1eb062af9c610957ce0ee": "7ddbb876430a01b7429c5ade13485e32",
".git/objects/ce/4529fc5ccab04a71c4122b43e008592cd970aa": "7efa64ab5e15b377f0d41355e6a845b6",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/79/aa17fdd014d1b414d23b18bfc0c07e4f9e159c": "ce7414203edc84f0bb2b381d747df837",
".git/objects/1b/f662e80d9b344de1921cacf5594e7cb186dd81": "edebae00a794b670c5e02ad63abb8e92",
".git/objects/48/33fcf9ba677d3df448c90e63368e50f8bfc8d6": "a5b926fccf641f8e2a09e52478c0d37a",
".git/objects/4f/d0e51f345ee398d4c56c9a2a36514cfdc54f3e": "d8e976b7b97437231f01681fc40815a3",
".git/objects/8d/7cc62dc10fe535d71435a7dfa0f3c22106593f": "c3adda94d2bb6849757a4c4c2e97b53b",
".git/objects/12/a6d370d25cbf5646d9213ee304a75d8fab0d2b": "f919a82350ccbf07459d4fd79101b33e",
".git/objects/8c/c89674cf34215dcca409efd68d1d9d6c73d20e": "2061236e93763c61419a960c29b1b307",
".git/objects/85/823b38090ddd17309c55d1c4ec1c4fde82bdfd": "e9a3b132d2e1748f7994a74d1e33bcf5",
".git/objects/76/e759d7ab8e42628ee61f5c2fff41dd13e9011f": "13bb9c4bac1895b5bba7f9de8083d1e9",
".git/objects/2b/e39c7fd3da441ddac9bea54fd12621dd39960a": "24031b20667d22ca8dba4debe8b9eab5",
".git/objects/47/d084a13e7affbb541d5d8e054eb48fe81ae399": "1e06076f79fbdc68c7b9d123be5c1d04",
".git/objects/14/527d48e937a83f722e1ab9cb6103dbc7147647": "3f0def1b65811187f1a91cb90ba6fd04",
".git/objects/8e/f0c2144b4cda1045420eb2a6106087c2c6f38a": "e58fc54af7432a7af0fdc89c2ec7984d",
".git/objects/22/95fc933847e7aa0ed904506bf873863cbeb17d": "1c9a82f86876ff92b58b8156ba00d41c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "1d76ad78d94dbc132b449b5f7450f1db",
".git/logs/refs/heads/main": "1ce80c561394e70da3c9959fa1fae8bf",
".git/logs/refs/remotes/origin/origin/main": "c9c18973ffbf4b4529dc35020cc09412",
".git/logs/refs/remotes/origin/main": "27ab5e4e619fa3c2c7ae187ad8ccc2c9",
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
".git/refs/heads/main": "c6d29e4d39e1d2feef7b004e07c24746",
".git/refs/remotes/origin/origin/main": "c80072e4c3d25967f443421522c041b1",
".git/refs/remotes/origin/main": "c6d29e4d39e1d2feef7b004e07c24746",
".git/index": "23a7a078295471d2eb9d7c3e643c016e",
".git/packed-refs": "a891e6bb26eb0d480aef486a7e8ea166",
".git/COMMIT_EDITMSG": "b87881c5659e7c30951a07d19ffb993c",
".git/FETCH_HEAD": "b417897e6d1063c32ba553a84da8cb2b",
"assets/AssetManifest.json": "d6ece87b965ee1c5a01e736dfebc21d2",
"assets/NOTICES": "cf5b00bce3d576cc816a736243a6e7e0",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "15c1a74d4623ad49ce0a63e4327d14e4",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/syncfusion_flutter_pdfviewer/assets/squiggly.png": "c9602bfd4aa99590ca66ce212099885f",
"assets/packages/syncfusion_flutter_pdfviewer/assets/strikethrough.png": "cb39da11cd936bd01d1c5a911e429799",
"assets/packages/syncfusion_flutter_pdfviewer/assets/highlight.png": "7384946432b51b56b0990dca1a735169",
"assets/packages/syncfusion_flutter_pdfviewer/assets/underline.png": "c94a4441e753e4744e2857f0c4359bf0",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"assets/AssetManifest.bin": "64153025f9ab6b02e5a7199fb3758109",
"assets/fonts/MaterialIcons-Regular.otf": "9e415e6aac6610fd2f6b2f324b2a1c1a",
"assets/assets/my-picture.jpeg": "8652cf4d0acda1086c45f2fa318691b0",
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
"assets/assets/projects/weekly_planner/5_settings.png": "628c6fe9512243eedf6c9eaad65a69db",
"assets/assets/projects/weekly_planner/3_current_day.png": "e738e8e3c3804e5f120a4fd15bb69374",
"assets/assets/projects/weekly_planner/1_default_picture.png": "ce58b869bbdde3dfcf00b4844e39aba8",
"assets/assets/projects/weekly_planner/4_task_details.png": "2d4ba34cb07621f24b6741b9f18a127c",
"assets/assets/projects/weekly_planner/2_weekly_planner.png": "51eb6fd959047c7c6ee73cbd5a600aaa",
"assets/assets/projects/randev/5_work_schedule_screen.png": "3848296c5099e6eb27dddfd16008af19",
"assets/assets/projects/randev/2_store_details_screen.png": "01f1c9e4703666a424fe0401067d022d",
"assets/assets/projects/randev/3_booking_screen.png": "197975a1209b1b4621a65dae9f685c33",
"assets/assets/projects/randev/4_create_store_screen.png": "c55efc71f8ecceb535eeea406906468b",
"assets/assets/projects/randev/1_default_picture.png": "99e089c5fb5437d98ab67c053e38cfc7",
"assets/assets/projects/bi_dashboard/3_charts_list.png": "dd864ad9a74432cdd0441cadffea91a1",
"assets/assets/projects/bi_dashboard/2_welcome.png": "080c63622b4123e8a84aca4982e62626",
"assets/assets/projects/bi_dashboard/1_default_picture.png": "a79112fedca5e749b941749cf8b91ad2",
"assets/assets/projects/bi_dashboard/4_add_chart.png": "cb1e5c0bcfec2ad8d6260070b9862841",
"assets/assets/Rafik_Gharbi_Resume.pdf": "66650e4d766486329cf23711dfb3f831",
"assets/assets/my-projects.json": "4651d1d4a7751c477e37303abf05f49b",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "2fc47c0a0c3c7af8542b601634fe9674",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "143af6ff368f9cd21c863bfa4274c406",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "73584c1a3367e3eaf757647a8f5c5989",
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
