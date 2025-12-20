export default function EventSearchDisplay({ submittedSearchTerm, submittedCity }) {
     if (submittedSearchTerm && submittedCity) {
          return (
               <div>
                    Returning results for '{submittedSearchTerm}' in '{submittedCity}'
               </div>
          );
     }
     return;
}
