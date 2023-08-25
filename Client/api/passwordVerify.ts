import request from 'superagent'

const rootUrl = '/api/v1/passwordCheck'

export async function fetchVerification(enteredPassword: string) {
  try {
    const response = await request
      .post(rootUrl)
      .send({ password: enteredPassword })

    return response.body.correct
  } catch (error) {
    console.error('Error checking password:', error)
    return false
  }
}
