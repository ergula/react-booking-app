import NavigationBar from "../../components/menu";

export default function About() {
  return (
    <div className="flex flex-col flex-1 align-center flex-center justify-center h-screen">
      <NavigationBar />
      <div
        className="flex align-center flex-center justify-center h-screen"
      >
        <main className="flex flex-col items-center justify-center w-full flex-1 text-center">
          {/* Left Container */}

          <div className="bg-background rounded-2xl shadow-2xl shadow-darkBlue flex w-full max-w-5xl">
            <div className="w-3/5 p-5">
              <div className="text-left font-bold flex flex-row">
                <div className="mr-1">About</div>
                <div>Us</div>
              </div>
            </div>

            {/*  Right Container  */}

            <div className="w-2/5 bg-darkBlue text-white rounded-tr-2xl rounded-br-2xl py-36 px-12">
              <h2 className="text-3xl font-bold mb-2">About Us</h2>
              <div className="border-2 w-full border-white inline-block mb-3 bg-white"></div>
              <p className="mb-10">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>

              {/* Button */}
              
              <a
                href="#"
                className="border-2 border-white rounded-full px-12 py-2 inline-block font-semibold hover:bg-white hover:text-darkBlue"
              >
                POLICY
              </a>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
