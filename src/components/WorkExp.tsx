import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"

export default function WorkExp() {
    return (
        <>
            <div className='flex justify-start w-full text-lg sm:text-base'>
                <div className='font-semibold'>Work Experience</div>
            </div>
            <div className='grid grid-cols-1 gap-4'>
                <Card className='bg-[#FFFFFFCC]'>
                    <CardHeader>
                        <CardTitle className="text-base sm:text-sm">
                            Defence Research and Development Organisation (DRDO) – Intern
                        </CardTitle>
                        <CardDescription className="text-sm sm:text-xs">
                            June 2024 – July 2024
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="text-sm sm:text-xs space-y-1">
                        <p>• Simulated a secure TLS-like client-server protocol using sockets, RSA key exchange, and AES encryption.</p>
                        <p>• Built a custom handshake process for encrypted session establishment.</p>
                    </CardContent>
                </Card>
            </div>
        </>
    )
}