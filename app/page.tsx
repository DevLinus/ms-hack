import Card from '@/components/hubCard';
import Divider from '@/components/Divider';
import BurgerIcons from '@/components/BurgerIcon';



export default function Home() {
  return (
<main className="h-fit overflow-hidden">


<div className='bg-white h-auto'>
<a href='/ActivitySearch/'>
<div className='container'>
<Card title="Suche" text ="Spezifische Events und Vereine"></Card>
</div>
</a>

<Divider/>
<a href='/activities/'>
<div>
<Card title="Entdecken" text ="Neue Events und Sportarten"></Card>
</div>
</a >
<Divider/>
<a href='/CreateEvent\/'>
<div>
  
<Card title="Erstellen" text ="deine eigenen Events"></Card>
</div>
</a>
</div>

</main>

  
  )
}
