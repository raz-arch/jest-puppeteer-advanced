import HomePage from '../pages/HomePage'
import TopBar from '../pages/components/TopBar'
import LoginPage from '../pages/LoginPage'
import FeedbackPage from '../pages/FeedbackPage'
import{username,password,timeout} from '../config'

describe('new Test', () => {
	let homePage
	let topBar
	let loginPage
	let feedbackPage

	beforeAll(async () => {
		jest.setTimeout(timeout)
		homePage = new HomePage()
		topBar = new TopBar()
		loginPage = new LoginPage()
		feedbackPage = new FeedbackPage()
	})

	it('Should load homepage', async () => {
		await homePage.visit()
		await homePage.isNavBarDisplayed()
		await topBar.isTopBarDisplayed()
	})
	it('User can submit feedback', async () => {
		await homePage.clickFeedbackLink()
		await feedbackPage.isFeedbackFormDisplayed()
		await feedbackPage.submitFeedback(
			'test',
			'test@test.com',
			'testsubject',
			'testcomment'
		)
		await feedbackPage.wait(3000)
	})
	

	it('user try to login', async () => {
		await homePage.visit()
		await topBar.isTopBarDisplayed()
		await topBar.clickSignInButton()
		await loginPage.isLoginFormDisplayed()
		await loginPage.login(username, password)
		await loginPage.wait(5000)
	})
})
