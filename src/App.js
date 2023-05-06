import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas, faR, faL } from "@fortawesome/free-solid-svg-icons";

library.add(fab, fas, faR, faL)

const App = () => {
    return (
        <>
            <h1>Hello world !</h1>
        </>
    );
}

export default App;
