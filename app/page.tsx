import Card from '@/components/hubCard';
import Divider from '@/components/Divider';
import BurgerIcons from '@/components/BurgerIcon';



export default function Home() {
  return (
<main className="h-fit overflow-hidden">


<div className='bg-white h-auto'>
 
<Card title="Suche" text ="Spezifische Events und Vereine"></Card>
<Divider/>
<Card title="Entdecken" text ="Neue Events und Sportarten"></Card>
<Divider/>
<Card title="Erstellen" text ="deine eigenen Events"></Card>
</div>

</main>

  
  )
}
