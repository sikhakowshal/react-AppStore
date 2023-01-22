import './index.css'

const AppItem = props => {
  const {eachApp} = props
  const {appName, imageUrl} = eachApp

  return (
    <li className="app-item" key={eachApp.appId}>
      <img src={imageUrl} className="app-image" alt={appName} />
      <p className="app-name">{appName}</p>
    </li>
  )
}

export default AppItem
