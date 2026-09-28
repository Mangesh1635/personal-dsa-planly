const Task=require('../models/Task'),plan=require('../data/plan');
async function seedIfEmpty(){if(await Task.countDocuments())return;await Task.insertMany(plan.flatMap(s=>s.days.flatMap(d=>d.tasks.map(t=>({...t,sprint:s.sprint,day:d.day}))))) ;console.log('Seeded task plan')}
module.exports={seedIfEmpty};
