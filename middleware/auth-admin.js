export default async function($auth, redirect){
    const user = $auth.user;
    if (user && user.admin){

    } else {
        redirect('/')
    }
}