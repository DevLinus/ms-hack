import BurgerIcons from '@/components/BurgerIcon';
import SearchMenu from '@/components/ActivitySearchComponents/SearchMenu';

export default function  Page() {
    return (
        
        <main >
            <div className=' w-screen  h-screen bg-white '>
             <SearchMenu></SearchMenu>
                
             <img className="mr-0 ml-auto  h-auto w-6/12 " src='racoon.png'></img>
            </div>
            </main >
        
    )
}