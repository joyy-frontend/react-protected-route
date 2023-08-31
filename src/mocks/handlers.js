import { rest } from 'msw';

// eslint-disable-next-line import/no-anonymous-default-export
export default [
  rest.post('/user/login', (req, res, ctx) => {
    if(req.body.id && req.body.pw) {
      return res(
        ctx.json({
          accessToken: "테스트",
        })
      );
    } else {
      return res(ctx.status(400));
    }
  }),
];
