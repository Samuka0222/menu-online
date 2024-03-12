import RestaurantSettingsForm from "./_components/restaurant-settings";

const SettingsPage = () => {
  return ( 
    <main className="px-6 py-5 flex flex-col justify-center items-center">
      <h1 className="text-xl text-black font-semibold mb-3">Configurações</h1>
      <p className="text-base text-gray-400 mb-5">Personalize as informações do seu restaurante.</p>
      <RestaurantSettingsForm />
    </main>
   );
}

export default SettingsPage;