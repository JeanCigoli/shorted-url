import { SERVER } from '../utils/config/constants';
import errorLogger from '../utils/logger';
import { server } from './application';
import { makeCreateMongoOnInit } from './facades';

(async () => {
  try {
    await makeCreateMongoOnInit().start();

    server.listen(SERVER.PORT, async () => {
      console.log(`Server is running on port: ${SERVER.PORT}`);
    });
  } catch (error) {
    errorLogger(error);
  }
})();
