const Logger = require('logplease');

const options = {
    useColors: true,     // Enable colors
    color: Logger.Colors.Magenta, // Set the color of the logger
    showTimestamp: true, // Display timestamp in the log message
    useLocalTime: false, // Display timestamp in local timezone
    showLevel: true,     // Display log level in the log message
    filename: null,      // Set file path to log to a file
    appendFile: true,    // Append logfile instead of overwriting
};
const logger = Logger.create("adoptajunior", options);
logger.log(`Empezando a usar Node.js :)`); // alias for debug()
logger.debug(`Hola Mundo de Node`);
logger.info(`Noticias de última hora, Node.js me encanta!!`);
logger.warn(`Tirando warnings como campeones`);
logger.error(`Algo no está bien!!!`);

