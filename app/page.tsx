import Card from '@/components/hubCard';
import Divider from '@/components/Divider';
import BurgerIcons from '@/components/BurgerIcon';
import SearchIcon from '@mui/icons-material/Search';
import ExploreIcon from '@mui/icons-material/Explore';
import EditCalendarIcon from '@mui/icons-material/EditCalendar';


export default function Home() {
  return (
<main className="h-fit overflow-hidden">


<div className='bg-white h-auto'>
<a href='/ActivitySearch/'>
<div className='container'>
<Card title="Suche" text ="Spezifische Events und Vereine" icon={<SearchIcon fontSize="large"/>}></Card>
</div>
</a>

<Divider/>
<a href='/activities/'>
<div>
<Card title="Entdecken" text ="Neue Events und Sportarten" icon={<ExploreIcon fontSize='large'/>}></Card>
</div>
</a >
<Divider/>
<a href='/CreateEvent\/'>
<div>
  
<Card title="Erstellen" text ="deine eigenen Events" icon={<EditCalendarIcon fontSize='large'/>}></Card>
</div>
</a>
</div>

</main>

  
  )
}
