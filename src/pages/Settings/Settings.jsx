
import DeleteUser from "../../components/DeleteUser/DeleteUser";
import { useEffect } from "react";


export default function SettingsPage({user, setUser}) {
  useEffect(() => {
    document.title = "Settings | Y";  
  }, []);

    return (
  <div>
    <h1>SETTINGS</h1>
    <h3>Edit Account into will go here</h3>
    <p>Sherb la fweeka favu bagoo om geebuglon mekchate. Grouw bweb kabuna fa plooba lay. Swaybul fleeny zerpa na shanga aw zu wub globbay. Feebee gronk laka blitz gab clops fro zorknu ah mebzi shanga yibsy wona litzergam. Gerbits ga baba oh sedna smustle whipnow shanga mala army-putar. Yib gorney bagoo norb whipnow ono fazoo fleebs mayzie foo fleeny. Dag nooboo nooboo nooboo snanna fergoob klop zerpa milay dufka choo hipta sons.

Charba ga letish discufa vadish. Bileptu dufka shooflee zoob na noobie foop. Neib arogaba bweb oh jepsi awasa sugnorg sula geebuglon miza gon grobe. Krem frash blousa whipnow zu heb gorney ba neib chibna burb swobe afenk dowl sul. Klop zebanay wona gleb zu gloopy gork awasa. Whippna treeb zorknu avoo simsa. Taw jepsi va zep fredishay globbay firbs norb heb morpher.</p>
    {/* <Post/> */}
    <h3>DELETE ACCOUNT</h3>
    <DeleteUser/>
  </div>
    );
  }