export default async function Login() {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    return <div>You can log in on this page.</div>
}