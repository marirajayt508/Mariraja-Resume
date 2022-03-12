import '../CSS/NavBar.css'
export const Navbar = ()=>{
  const nav_details = [
    {
       details : 'Basic Details',
       route : '/'
    },
    {
      details : 'Certification Details',
      route : '/certi'
    },
    {
      details : 'Download',
      route : '/'
    }
  ]
  const name = "Mariraja Selvaraja"
    return <div>
        <div class="collapse" id="navbarToggleExternalContent">
</div>
<nav class="navbar navbar-dark bg-dark">
  <span class="text text-white"><strong>{name} Resume</strong></span>
 <div>
  {
    nav_details.map((a)=>{
      return <div>
        <a class="text text-white" href={a.route}><strong>{a.details} Resume</strong></a>&nbsp;
        </div>
    })
  }
  </div>
</nav>
    </div>
}