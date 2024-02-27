import client from '@monorepo/database';

const handler = async () => {
  return {
    status: 200,
    body: {
      foo: `${client()} - Votes`
    },
  };
};

export { handler };