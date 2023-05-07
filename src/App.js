import { Address } from "./components/Address";
import { FullName } from "./components/FullName";
import { Header } from "./components/Header";
import { ProfilePhoto } from "./components/ProfilePhoto";

const users = [
  { name: "Hannah", age: 19, picture: "Hannah" },
  { name: "Joseph", age: 20, picture: "Joseph" },
  { name: "Kevin", age: 30, picture: "Kevin" },
  { name: "Rose", age: 25, picture: "Rose" },
];

function App() {
  return (
    <>
      <Header />
      <main>
        <ProfilePhoto />
        <FullName />
        <Address />
      </main>
    </>
  );
}

export default App;
