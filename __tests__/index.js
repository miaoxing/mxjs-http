import api from '..';
import {createPromise, bootstrap} from '@mxjs/test';
import $ from 'miaoxing';

bootstrap();

describe('test', () => {
  test('get', async () => {
    const promise = createPromise();
    $.http = jest.fn().mockImplementationOnce(() => promise.resolve({
      ret: {
        data: {
          foo: 3,
          bar: 4,
        },
      },
    }));

    const ret = await api.get('abc', {loading: true});
    expect(ret).toMatchSnapshot();

    expect($.http).toHaveBeenCalledTimes(1);
    expect($.http).toMatchSnapshot();
  });
});

