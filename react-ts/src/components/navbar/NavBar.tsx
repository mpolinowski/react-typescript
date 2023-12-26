import { useSelector } from 'react-redux'

import {
  Form,
  NavLink,
  useSearchParams,
  useNavigate } from 'react-router-dom'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"

import type { RootState } from '@/store/store'

import { ThemeToggle } from '@/components/theme/Theme-Toggle'
import { gettinStarted } from '@/data/ivMenu'
import { components } from '@/data/components' 

import { Cctv } from "lucide-react"
import INLogo from "@/assets/IN-logo.svg?react"
 
export function NavBar() {
  const [searchParams] = useSearchParams()

  const user = useSelector((state: RootState) => state.user.user)

  const navigate = useNavigate()

  function handleSignInClick() {
    navigate('/')
  }
  
  return (
    <NavigationMenu className='mb-12'>
      <NavigationMenuList className='flex flex-row justify-around w-screen'>
        <NavigationMenuItem>
          <NavigationMenuTrigger><INLogo className='w-24' /></NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <NavLink
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    to="/"
                  >
                    <Cctv size={48} strokeWidth={1.25} absoluteStrokeWidth className="ml-12 mb-2" />
                    <div className="mb-2 mt-4 text-lg font-medium">
                      InstarVision
                    </div>
                    <p className="text-sm leading-tight text-muted-foreground">
                        Bei dieser Version handelt es sich um ein von Grund auf neu geschriebenes Programm, welches extra auf unsere HD Serie zugeschnitten ist.
                    </p>
                  </NavLink>
                </NavigationMenuLink>
              </li>
              {gettinStarted.map((category) => (
                <li key={category.title}>
                    <NavLink to={category.to}>
                        <h3 className="mb-2 text-sm font-medium leading-none">
                            {category.title}
                        </h3>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            {category.description}
                        </p>
                    </NavLink>
                </li>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem className='collapse lg:visible'>
          <NavigationMenuTrigger>Components</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {components.map((component) => (
                <li key={component.title}>
                    <NavigationMenuLink asChild>
                        <NavLink to={component.to}>
                        <div className="mb-2 text-sm font-medium leading-none">{component.title}</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            {component.description}
                        </p>
                        </NavLink>
                    </NavigationMenuLink>
                </li>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem className='collapse md:visible'>
            <NavLink to='/start' className={({ isActive }) =>
                `no-underline p-1 pb-2 border-solid border-b-2 ${isActive ? "border-white" : "border-transparent"}`
            }>
                <Button variant="ghost">Start</Button>
            </NavLink>
        </NavigationMenuItem>
        <NavigationMenuItem className='collapse md:visible'>
            <NavLink to='/camera-list' className={({ isActive }) =>
                `no-underline p-1 pb-2 border-solid border-b-2 ${isActive ? "border-white" : "border-transparent"}`
            }>
                <Button variant="ghost">Camera List</Button>
            </NavLink>
        </NavigationMenuItem>
        <NavigationMenuItem className='collapse md:visible'>
            <NavLink to='/dashboard' className={({ isActive }) =>
                `no-underline p-1 pb-2 border-solid border-b-2 ${isActive ? "border-white" : "border-transparent"}`
            }>
                <Button variant="ghost">Admin</Button>
            </NavLink>
        </NavigationMenuItem>
        <NavigationMenuItem className='collapse md:visible'>
        <Form
            className="relative text-right"
            // onSubmit={handleSearchSubmit}
            action="/camera-list"
        >
            <Input
                type="search"
                name="search"
                placeholder="Search"
                defaultValue={searchParams.get('search') ?? ''}
            />
        </Form>
        </NavigationMenuItem>
        <NavigationMenuItem>
            {user ? (
              <span className="ml-auto">Welcome back {user.name}!</span>
            ) : (
              <Button variant="outline"
                onClick={handleSignInClick}
              >
                Sign in
              </Button>
            )}
        </NavigationMenuItem>
        <NavigationMenuItem>
          <ThemeToggle />
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}