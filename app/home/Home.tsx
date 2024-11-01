
const Home = () => {
  return (
    <div
      style={{
        // color: "#EEE",
        // backgroundColor: "#264BC0",
        // background: "linear-gradient(to top, #264BC0, #188DEC)",
        width: "100%",
        height: "100%",
        padding: 1,
        borderRadius: 30

      }}
    >
      <h2>Ecouter</h2>
      <ul style={{textAlign: "justify" }}>
        {/* <ul style={{ margin: 30, textAlign: "justify", listStyleType: "disc" }}> */}
        <li>
          Répétition espacée : Plutôt que d'écouter plusieurs fois le même
          contenu en une seule session, il est plus efficace d'espacer les
          écoutes dans le temps. La répétition espacée est basée sur le fait que
          le cerveau retient mieux les informations quand elles sont répétées à
          des intervalles croissants (par exemple, après 1 jour, 3 jours, 1
          semaine, etc.).
        </li>
        <li>
          Répétition active : Au lieu de simplement réécouter passivement,
          essaie de t'engager activement dans le processus d'apprentissage. Par
          exemple, après chaque écoute, pose-toi des questions sur le contenu ou
          essaie de l'expliquer à quelqu'un d'autre. Cela t'aide à consolider
          davantage l'information.
        </li>

        <li>
          Réfléchir et réviser : Après plusieurs écoutes, fais une pause pour
          réfléchir activement à ce que tu as retenu, et récapitule les points
          principaux. Cela t'aide à identifier les zones où tu as besoin de plus
          de travail.
        </li>
      </ul>
      <style jsx>
        {`
          h2 {
            // padding-top: 20px;
            padding-left: 40%;
            padding-right: 40%;
            color: #fca4f0;
            font-size: 20px;
            font-weight: bolder;
          }
          li {
            margin-bottom: 5px;
            border: 1px solid pink;
            border-radius: 10px;
            padding: 10px;
          }
        `}
      </style>
    </div>
  );
};

export default Home;
