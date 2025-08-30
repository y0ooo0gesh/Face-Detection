import http from "http";

const PORT = 5000;

const CLARIFAI_PAT = "03d66281f5204c14a65337f3eb175732"; 
const USER_ID = "clarifai";        // e.g. "clarifai"
const APP_ID = "main";          // e.g. "main"

const MODEL_ID = "face-detection";
const CLARIFAI_MODEL_URL = `https://api.clarifai.com/v2/models/${MODEL_ID}/outputs`;

const server = http.createServer(async (req, res) => {
  if (req.method === "OPTIONS") {
    // Handle CORS preflight
    res.writeHead(204, {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "POST, GET, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    });
    res.end();
    return;
  }

  if (req.method === "POST" && req.url === "/detect") {
    let body = "";
    req.on("data", chunk => {
      body += chunk.toString();
    });

    req.on("end", async () => {
      try {
        const { imageUrl } = JSON.parse(body);

        const response = await fetch(CLARIFAI_MODEL_URL, {
          method: "POST",
          headers: {
            "Accept": "application/json",
            "Authorization": `Key ${CLARIFAI_PAT}`,
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            user_app_id: {
              user_id: USER_ID,
              app_id: APP_ID
            },
            inputs: [
              {
                data: {
                  image: {
                    url: imageUrl
                  }
                }
              }
            ]
          })
        });

        const data = await response.json();

        res.writeHead(200, {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*"
        });
        res.end(JSON.stringify(data));
      } catch (err) {
        res.writeHead(500, {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*"
        });
        res.end(JSON.stringify({ error: "Clarifai request failed", details: err.message }));
      }
    });
  } else {
    res.writeHead(404, {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*"
    });
    res.end(JSON.stringify({ error: "Not Found" }));
  }
});

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
