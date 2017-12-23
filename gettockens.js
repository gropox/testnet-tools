const ga = require("golos-addons");
const golos = ga.golos;
const global = ga.global;

global.initApp("gettockens");

const log = global.getLogger("gettockens");
const CONFIG = global.CONFIG;
golos.setWebsocket(global.CONFIG.websocket);
golos.setChainId(global.CONFIG.chain_id);

const amount = "100000.000 GOLOS";

async function run() {

    log.info("transfer from", CONFIG.initminer.account, "to", CONFIG.account, amount);

    await golos.transfer(CONFIG.initminer.key, CONFIG.initminer.account, CONFIG.account, amount, "for tests");

    log.info("done");

    process.exit(0);

}

run();