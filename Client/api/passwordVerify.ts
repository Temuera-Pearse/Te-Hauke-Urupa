import request from 'superagent'

const rootUrl = 'api/v1/passwordCheck'

export async function fetchVerification(enteredPassword: string) {
  try {
    const res = await fetch(rootUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ password: enteredPassword }),
    })

    const data = await res.json
    return data.correct
  } catch (error) {
    console.error('Error checking password:', error)
    return false
  }
}
