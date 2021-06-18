from flask import Flask, render_template,request,redirect,url_for

app = Flask(__name__)

@app.route("/")
def main():
    return redirect(url_for("home"))

@app.route("/home",methods=["GET","POST"])
def home():
    return render_template("home.html")

@app.route("/climate",methods=["GET","POST"])
def climate():
    return render_template("climate.html")

@app.route("/changes",methods=["GET","POST"])
def changes():
    return render_template("changes.html")
    
@app.route("/author",methods=["GET","POST"])
def author():
    return render_template("author.html")

@app.errorhandler(500)
def not_found(track):
    return "Not a valid link"

@app.errorhandler(404)
def not_found(link):
    return "Not a valid link"

if __name__ == "__main__":
    app.run()