    javascript
    const bot = require(__dirname + '/lib/smd');
    const { VERSION } = require(__dirname + '/config');

    const start = async () => {
        console.info(`ITACHI ${VERSION}`);
        try {
            await bot.init();
            bot.logger.info('⏳ Database syncing!');
            await bot.DATABASE.sync();
            await bot.connect();
        } catch (error) {
            console.error(error);
            start();
        }
    }
    start();
