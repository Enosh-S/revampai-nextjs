import Header from '../components/Header';

export default function Dasboard() {
  return (
    <>
      <Header />
      <div class="flex flex-col card shadow mx-auto w-fill lg:mx-10 lg:mt-10">
        <div class="flex flex-col w-full lg:flex-row py-10 mx-auto px-10">
          <div class="grid flex-grow h-80 card  rounded-box place-items-start px-5 py-5">
            <div class="mt-5">
              <h1 class="text-xl font-bold">Select your usecase</h1>
            </div>
          </div>
          <div class="divider lg:divider-horizontal">AI</div>
          <div class="grid flex-grow h-80 card bg-base-300 rounded-box place-items-center">
            content
          </div>
        </div>
      </div>
    </>
  );
}
