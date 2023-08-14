import LogoProvider from '@/components/logo-provider';
import { Separator } from '@/components/ui/separator';

export default async function ProjectsLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className='flex min-h-screen min-w-full justify-center bg-background'>
      <div className='flex h-full w-full flex-col items-center py-5'>
        {/* Header with logo */}
        <div className='w-full px-10 pb-5 lg:max-w-screen-xl'>
          <LogoProvider />
        </div>

        {/* Separator without max screen width */}
        <Separator className='bg-border/60' />

        {/* Main content */}
        <div className='flex h-full w-full flex-col items-start justify-start pt-10  lg:max-w-screen-xl'>
          {children}
        </div>
      </div>
    </main>
  );
}
