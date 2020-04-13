from responder import API
from starlette.middleware.cors import CORSMiddleware

server = dict(
    host = '0.0.0.0',
    port = 3700,
    cert = "",
    pem = ""
)

# The Application
app = API(
    title='"The Worksman Estimator',
    version='1.0.1',
    static_dir='client/templates/static',
    templates_dir='client/templates',
    static_route='/static',
    secret_key='',
    auto_escape=True,
    debug=True

)

# Application Configuration
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
    allow_credentials=False,
    allow_origin_regex=None,
    expose_headers=[
        "Access-Control-Allow-Origin",
        "Access-Control-Allow-Credentials",
        "Access-Control-Allow-Expose-Headers"
    ],
    max_age=10000

)

@app.route('/manifest.json')
async def web_manifest(req, resp):
    resp.headers["Content-Type"] = "text/cache=manifest"
    resp.html = app.template('manifest.json')

@app.route("/400")
async def not_found(req, resp):   
    resp.status_code = app.status_codes.HTTP_400
    #resp.media = {'codes':dir(app.status_codes)}


@app.route("/")
@app.route("/{path}")
async def index(req, resp, *, path=""):
    resp.html = app.template("index.html")


if __name__ == "__main__":
    app.run(
        address=server['host'],
        port=server['port'],
        limit_concurrency=500,
        limit_max_requests=500,
        loop='asyncio',
        access_log=False
    )
