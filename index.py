# Copyright 2024 <  Wendlassida Melissa Nikiema, NIKW72350304>
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#     http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.

from flask import Flask
from flask import render_template
from flask import request
from flask import g
from database import Database
import random

app = Flask(__name__, static_url_path="", static_folder="static")


def get_db():
    db = getattr(g, '_database', None)
    if db is None:
        g._database = Database()
    return g._database


@app.teardown_appcontext
def close_connection(exception):
    db = getattr(g, '_database', None)
    if db is not None:
        db.disconnect()


@app.route('/')
def form():
    # À remplacer par le contenu de votre choix.
    db = get_db()
    animaux = db.get_animaux()
    animaux_aleatoires = random.sample(animaux, 5)
    return render_template('form.html', animaux=animaux_aleatoires)

@app.route('/animal/<int:animal_id>')
def animal_page(animal_id):
    db = get_db()
    animal = db.get_animal(animal_id)
    if animal is None:
        return render_template("404.html"), 404
    return render_template('animal.html', animal=animal)

@app.route('/recherche')
def recherche():
    query = request.args.get("q", "")
    if query == "":
        return render_template("recherche.html", query="", resultats=[])

    db = get_db()
    resultats = db.search_animaux(query)

    return render_template("recherche.html", query=query, resultats=resultats)

@app.route('/adoption', methods=['GET', 'POST'])
def adoption():
    db = get_db()

    if request.method == 'POST':
        nom = request.form.get('nom')
        espece = request.form.get('espece')
        race = request.form.get('race')
        age = request.form.get('age')
        description = request.form.get('description')
        courriel = request.form.get('courriel')
        adresse = request.form.get('adresse')
        ville = request.form.get('ville')
        cp = request.form.get('cp')

        # Ajouter dans la BD
        new_id = db.add_animal(nom, espece, race, age, description,
                               courriel, adresse, ville, cp)

        return render_template('confirmation.html', id=new_id)

    return render_template('adoption.html')

if __name__ == "__main__":
    app.run(debug=True)

    

