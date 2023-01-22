import './index.css'

const TabItem = props => {
  const {eachTab, updateActiveTabId, isActive} = props
  const {tabId, displayText} = eachTab

  const onClickTabItem = () => {
    updateActiveTabId(tabId)
  }

  const activeTabBtn = isActive ? 'active-tab-btn' : ''

  return (
    <li className="tab">
      <button
        className={`tab-button ${activeTabBtn}`}
        type="button"
        onClick={onClickTabItem}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
