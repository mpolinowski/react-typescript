import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import { EventsArrayType } from '@/data/cameras'


export function ScrollCards(props: EventsArrayType) {
  return (
    <>
        <ScrollArea className="sm:w-68 md:w-86 whitespace-nowrap rounded-md border">
            <div className="flex w-max space-x-4">
                { props.events.map(( event ) => (
                    <figure key={event.timestamp} className="shrink-0 pb-2">
                        <div className="overflow-hidden rounded-md">
                        <img
                            src={event.snapshot}
                            alt={`Alarm event: ${event.timestamp}`}
                            className="aspect-square h-fit w-fit object-cover"
                        />
                        </div>
                        <figcaption className="pt-2 text-xs text-muted-foreground">
                        Timestamp{" "}
                        <span className="font-semibold text-foreground">
                            {event.timestamp}
                        </span>
                        </figcaption>
                    </figure>
                ))}
            </div>
            <ScrollBar orientation="horizontal" />
        </ScrollArea>
    </>
  )
}

// export function ScrollCards(props: Events[]) {
//     return (
//       <>
//           <ScrollArea className="sm:w-68 md:w-86 whitespace-nowrap rounded-md border">
//               <div className="flex w-max space-x-4">
//                   { props.map(( event ) => (
//                       <figure key={camera.events[props.id].timestamp} className="shrink-0 pb-2">
//                           <div className="overflow-hidden rounded-md">
//                           <img
//                               src={camera.events[props.id].snapshot}
//                               alt={`Alarm event: ${camera.events[props.id].timestamp}`}
//                               className="aspect-square h-fit w-fit object-cover"
//                           />
//                           </div>
//                           <figcaption className="pt-2 text-xs text-muted-foreground">
//                           Timestamp{" "}
//                           <span className="font-semibold text-foreground">
//                               {camera.events[props.id].timestamp}
//                           </span>
//                           </figcaption>
//                       </figure>
//                   ))}
//               </div>
//               <ScrollBar orientation="horizontal" />
//           </ScrollArea>
//       </>
//     )
//   }