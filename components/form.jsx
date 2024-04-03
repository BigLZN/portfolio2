function form() {
  return (
    <>
      <hr className="divider" />
      <section>
        <div className="container">
          <h2>ME CONTACTER</h2>
          <form action="#">
            <div className="input-group">
              <label htmlFor="email">Email :</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Votre adresse email"
              />
            </div>
            <div className="input-group">
              <label htmlFor="objet">Objet :</label>
              <input
                type="text"
                id="objet"
                name="objet"
                placeholder="L'objet de votre message"
              />
            </div>
            <div className="input-group">
              <label htmlFor="description">Description :</label>
              <textarea
                id="description"
                name="description"
                rows="4"
                placeholder="Votre message"
              ></textarea>
            </div>
            <button type="submit">Envoyer</button>
          </form>
        </div>
      </section>
    </>
  );
}

export default form;
