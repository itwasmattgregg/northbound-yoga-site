const client = require("@sendgrid/client");

export default async (req, res) => {
  if (req.method === "POST") {
    client.setApiKey(process.env.SENDGRID_API_KEY);
    const request = {
      method: "PUT",
      url: "/v3/marketing/contacts",
    };

    const { email, name } = req.body;

    try {
      request.body = {
        contacts: [
          {
            email,
            first_name: name,
          },
        ],
      };
      await client.request(request);
      res.status(201).json({ ok: true });
    } catch (e) {
      if (e.code === 11000) {
        res.status(500).send("You've already been added to the list");
        return;
      }
      console.log(e.response.body);
      res.status(500).end();
    }
  } else {
    // Method not permitted
    res.status(405).end();
  }
};
