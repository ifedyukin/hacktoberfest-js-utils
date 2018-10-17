import groupby from '../src/groupby';

describe('groupby', () => {
  const DATA = [{
    data: 'hello',
    owner: 'bob',
  }, {
    data: 'world', 
    owner: 'bob',
  }, {
    data: 'set',
    owner: 'alice'
  }];

  test('group by should correctly group by owner', () => {
    const expected_result = {
      'bob': [{
        data: 'hello',
        owner: 'bob',
      }, {
        data: 'world', 
        owner: 'bob',
      }],
      'alice': [{
        data: 'set',
        owner: 'alice'
      }]
    }
    expect(groupby(DATA, 'owner')).toMatchObject(expected_result);
  });

  test('group by should correctly group by data', () => {
    const expected_result = {
      'hello': [{
        data: 'hello',
        owner: 'bob',
      }],
      'world': [{
        data: 'world', 
        owner: 'bob',
      }],
      'set': [{
        data: 'set',
        owner: 'alice'
      }]
    }
    expect(groupby(DATA, 'data')).toMatchObject(expected_result);
  });
});
