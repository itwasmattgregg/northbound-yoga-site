import { withSessionSsr } from "@utils/session";

export default function Manager() {
  return <>Hey there</>;
}

export const getServerSideProps = withSessionSsr(async function ({ req, res }) {
  const user = req.session.user;

  if (user === undefined) {
    res.setHeader("location", "/login");
    res.statusCode = 302;
    res.end();
    return { props: {} };
  }

  return { props: {} };
});
