import { useEffect, useState } from 'react';
import './palindromeChecker.css';

function PalindromeChecker() {
  const [userInput, setUserInput] = useState('');
  const [palindromeResult, setPalindromeResult] = useState('');
  const [isPalindrome, setIsPalindrome] = useState(false);

  useEffect(() => {
    function cleanUpNonAlpha(str) {
      return str.replace(/[\W_]/g, '');
    }

    function makeUppercase(str) {
      return str.toUpperCase();
    }

    function flipStr(str) {
      return str.split('').reverse().join('');
    }

    function palindrome(str) {
      const cleanedUpStr = cleanUpNonAlpha(str);
      const uppercaseStr = makeUppercase(cleanedUpStr);
      const reversedStr = flipStr(uppercaseStr);
      setIsPalindrome(reversedStr === uppercaseStr);
      setPalindromeResult(reversedStr);

      return true;
    }

    palindrome(userInput);
  }, [userInput]);

  return (
    <div className="palindrome">
      <section>
        <h1>Palindrome Checker</h1>
        <p>
          A palindrome is a word, number, phrase, or other sequence of symbols
          that reads the same backwards as forwards.
        </p>
        <input
          type="text"
          name=""
          id=""
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
        />
        {userInput.length > 2 ? (
          <>
            <p>{`Is ${userInput.toUpperCase()} palindrome of ${palindromeResult} ?`}</p>
            <h2>{isPalindrome === true ? 'yes' : 'false'}</h2>
          </>
        ) : (
          <p>Type any word</p>
        )}
      </section>
    </div>
  );
}

export default PalindromeChecker;
