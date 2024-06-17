import { useState } from "react";
import {
  Button,
  DarkThemeToggle,
  FloatingLabel,
  Modal,
  useThemeMode,
} from "flowbite-react";
import { toast, ToastContainer } from "react-toastify";
import InfoTabs from "./InfoTabs";

function App() {
  const [permission, setPermission] = useState(false);
  const [password, setPassword] = useState("");
  const [showModal, setShowModal] = useState(false);
  const { mode } = useThemeMode();

  return (
    <main className="min-h-screen bg-slate-200 text-black dark:text-white dark:bg-slate-950">
      <div className="w-full grid grid-cols-2 px-8 py-3 bg-slate-800">
        <p className="font-semibold text-2xl text-white">QSHLVDD</p>
        <div className="flex justify-end">
          <DarkThemeToggle />
        </div>
      </div>
      <div className="flex flex-col gap-4 px-4 mt-4">
        {!permission && (
          <div className="p-4 flex justify-center items-center bg-green-200 dark:bg-green-950 rounded-xl border border-green-600 dark:border-green-400">
            <Button color="success" onClick={() => setShowModal(true)}>
              Sabes la contraseña?
            </Button>
            <ModalPassword
              setShowModal={setShowModal}
              showModal={showModal}
              setPassword={setPassword}
              setPermission={setPermission}
              password={password}
            />
          </div>
        )}
        {permission && <InfoTabs /> }
      </div>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme={mode}
        transition:Bounce
      />
    </main>
  );
}

export default App;

const ModalPassword = ({
  showModal,
  setShowModal,
  setPassword,
  password,
  setPermission,
}) => {
  const [failure, setFailure] = useState(false);

  const verifyPassword = () => {
    if (password == "QSHLVDD") {
      setPermission(true);
      setShowModal(false);
      setFailure(false);
      toast.success('Contraseña correcta :"3, se que la sabrias :D');
    } else {
      setFailure(true);
      toast.error('Contraseña equivocada, la sabes, no me pongas triste. :"c');
    }
  };

  return (
    <>
      <Modal show={showModal} onClose={() => setShowModal(false)}>
        <Modal.Header>
          Dices saber la contraseña, a ver si es cierto.
        </Modal.Header>
        <Modal.Body>
          <div className="space-y-6">
            <p className="text-base leading-relaxed text-gray-800 dark:text-gray-100">
              La contraseña es facil, pero, para ti es facil, es un acronimo de
              lo que deseo para nosotros. Jajaj, la verdad nunca pense decirtelo
              o mencionarte ese acronimo, pensaba mantenerlo si es que en algun
              momento, ud (mi princesa) y yo, fuesemos novios. Ahora ya lo
              somos, pero quiero mantenerlo porque es lo que quiero para
              nosotros para toda la vida, quiero que se haga la voluntad de
              Dios.
            </p>
            <div>
              <FloatingLabel
                color={failure ? "error" : "default"}
                variant="standard"
                label="La contraseña es..."
                onChange={(e) => setPassword(e.target.value)}
                autoComplete={false}
              />
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button color="blue" onClick={verifyPassword}>
            Estoy segura de mi respuesta.
          </Button>
          <Button color="failure" onClick={() => setShowModal(false)} outline>
            No se :"c
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
