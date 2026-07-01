import { customFixture } from './CustomFixture'

customFixture("Use Custom Fixture", async ({LeafTapsLogin}) => {

    await LeafTapsLogin.locator("text=CRM/SFA").click()
    
})