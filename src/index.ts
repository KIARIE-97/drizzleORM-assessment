
import db from "./drizzle/db";
import { usersTable, commentTable, categoryTable } from "./drizzle/schema";
import {TIComment, TSComment, TIUsers, TSUsers} from "./drizzle/schema";


const getUsers = async (): Promise<TSUsers[] | null> => {
    return await db.query.usersTable.findMany();
}

// const getcomments = async (): Promise<TSUser[] | null> => {
//     return await db.query.UsersTable.findMany();
// }

const getUsersWithcomment = async () => {
    return await db.query.usersTable.findMany({
        with: {
           comment : true
        }
    })
}

async function main () {
    
    console.log(await getUsersWithcomment());
}

main();