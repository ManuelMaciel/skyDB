import { connection } from '../../src/db/connect'

describe('create db', () => {
  test('it should check if db exist, if not write', async () => {
    const result = await connection();
    expect(result).toEqual('Message: log message - skyDB: started!');
  });
});
