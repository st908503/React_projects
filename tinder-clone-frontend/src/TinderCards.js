import React, { useState } from 'react'
import "./TinderCards.css"
import TinderCard from 'react-tinder-card'


function TinderCards() {

const [people, setPeople] = useState([
    {
        name:"Will Smith",
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSAyGQCtpxCZYzjcpM3-ViV4XM48pgiuvf7w&usqp=CAU"
    },
    {
        name:"Jason Momoa",
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS20gFhfSyFS1CnJhgLlmSKwu0o15cFd9srlg&usqp=CAU"
    },
    {
        name:"Akshay Kumar",
        url: "data:image/jpeg;base64,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"
    },
    {
        name:"Leonardo Di Caprio",
        url: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBUSEhgSEhUYGBgYGBgYGBIYGBgYGRgYGBgZGRgYGBgcIS4lHB4rHxgZJjgmKy8xNTU1GiQ7QDszPy40NTEBDAwMEA8QGhISGDEkISE2NDYxNDQ0NDExNDQ0NDQ0NDQ0NDQxNDQ0MTExMTc0MTQ0NDQxNDQ0NDQ0NDQxNDQxNP/AABEIALEBHAMBIgACEQEDEQH/xAAbAAABBQEBAAAAAAAAAAAAAAACAQMEBQYAB//EAEEQAAIBAgMFBAgDBgYCAwEAAAECAAMRBBIhBTFBUWEGInGBEzJCkaGxwfBSctEUIzNigrI0c6LC4fFDUySSswf/xAAZAQEBAQEBAQAAAAAAAAAAAAAAAQIDBAX/xAAhEQEAAgIDAAEFAAAAAAAAAAAAAQIDERIhMUEEIjJhcf/aAAwDAQACEQMRAD8AxoWEqxwU4YSdENhYQWOBIQSFNhYoSOhIQSA0FhhYYSGEgAqwwkNUjipCmwki4vaVKlozXb8C6n/jzkLtDtM07UqZsxF3Yb1HADqfvfMxrJMi+rdoj/46fmx+gkOptmsx0YJ0VfqdZDopfp1tf6y+w2zSAGcoVPG7DyuRlv0vMTbSxXaBR2rXG51bxAv9JY4TbneK1lCi2jKG+IPzj1SjhkNm0PskEG5G+zC4J/lYKRIeIekTca3GoN+6d11O+xNtDuvJFlmuvleYbEJUF0YNztvHiOEeKTIOhUl6ZIKnQjiDqJodh7RFdcraOu8cxzm4nbCYUglJLanGzTmhFKxMskGnEKQI9omWP5ImWAzlnZY9liZYDJWIVj2SJkgMlYJWP5J3o4RHKxCskFIJSBHIgFZJNOCacCMVg5ZIKRMkB1UhhISiOBYU0EhhI5lhBYDYSEEjgWEFgNhIQSOBYYWA2Eh6AEncBc+A3wgsi7XuMNVt+BvlAwOMrmpUaofaJI6DgPdHMDgnqtamhY9PrCwOHDtl1HhPS+zmzkoUhkGp1LHeZwyZOMO2HFynvxj8PsCupuSVO+6ltPL2hzElPhXqA0yoVgPWUZbjS9uQO+3jPUMJTDbxHKux0qWNrEb+oM5ReZd5xVq8gfYrWsSTpqPDd99bR4bMemgAQMdNTwvbf5fKetU9kJT3KL8zrImJw6i4Kj3STkmFrirLyyvhGQNfiNbylTEPRqLUW2ZddNzDcQfGenbbwKMlso+/+55xtqgEqWG774zrjvycc2Pj43dCotRFdfVZQw8CLwikrOyb5sIo/Czj/USPnLi07vMYKQSkkFYhWURikHLJJWJlgRskTLJBSJlgMZYmWP5ZxWBGyTskfyxCsBgpEKR8rBKwI5SCUkgrEKQIpWJlkhlgZYBKsNVhKscVYUGWEFjgSGEgNhYQWOBIYSQNhIQSOKkMLKGckr9vIf2Wpb8OvhcX+F5b5Ij0gwKsLgixB4g75Eef9n1BqT0nZh7pXlu8J57sTClMU1Nr9xyvC+h0PwE9Hw7opu7hdw10njz/AJPf9POqrzZ26W6gW3fKU2zq9In93UQ9MwlwxAtrxHxmK9Q1ady5m00lTjrbzLnMiqSzAc76TKbY7TYWmbBs7XtZdRFomStoiUXG0yxPIA6eM8y7QfxDrx3dJ6Iu26FRgoujH2Dx5ATG9rsIAwqDibETeHq2pZz/AHV3Cz7I0CuGufadmHhZR9DLwJIuxCpoIq2uqJcAG1yNSOYJB1HWWFp7IeCY0YyRCkfyxCsojlImSSCs7LAjFImSSSsTLAj5YlpIKRMkJtHywcsklYJWDaOUiFJIKRCkLtFKQSkklIBWBGZYOSSGWDlgEqw1WcojiiRSBYYWcBDEIQLCCwhCEBAsILFEUQOCwMQhKMBvym3jbSOiGsEMHsSmf2p7XBIJFzcgnUC/HlJlNEFQvi8+/RdTc/yjfaTsZh0o1lqJpc5XXkw5dCLHzm8wOFo4imA4FwBY6cOs8tp7e6tYirz/AB2yzUIODwuJQ2uWayIRa+gJJuR4TR9jsZiajihWR1AW6s4IJ1tbWa+ngAikZmI5Ei1vG15BJBrIE0INrDl1mbTC1ie2e7ZYfEl/Q0kLplLHLvHPS+vhIGxtjYnDWKYGk5YX9K9Ugre2h7pA/wCJuK9hWbNv4AyyTBoyjui3P/iWsx5pL767eZHB1cU/epZGF+TC99crroR5SD2swJ9Gqa5gRu38p6njclNDbfaef7VcVK4B3akgmwtYnf5TMTq38b1us/t2xE7jMd5IHQBQQqjkAPnLLLAwrApdVCgnRQLaDujTwUGOz2U/GHhyzE2nQCsQiHOM0wayxMsciWgNkTrQ7TrQG8sTLHLRLQAywcsctEtDJsrEKx20QiAwywCsfIglYEdlgWj7LG8sNAWOrAWOASKUQxBEMQhRFEQRYBCEIMIQCEIGNgwgZRS9oqIFqgFs1lJ6i+W/XX4S37P4xgFN9Db3xa1MVEZG3MCD58ZWdnnIDIx7yPYjw3zzZq6jb2fTW39r0iniMy2twmE2l2mbCYsqcOzBSTnA0sdQRzl9idvJh0BY3JB9w3m0o6m18PXcNWcuRY+ipIXZQDvNrgG2v0nKvbtr2IEe19TEVA9PCsyN3c4sSDuvlGtrkazf0nZUAPITE19o4NCGpO9IKR33psqb+LZdOIk/B9qA7CmWVsxsroQQOV+m6WekmOojRzbFQkkTFsrvXCrqbkngAo4nzImw2jUGVmPKZfYrK1So2YFxZctxcC5Ja3Imw8pMVeVkzW413C5UWAA4C0WJeLPc+dLp04RTCkMQiLOgJaJCnQBiWh2nWgBaIVjloloZNWiER0iIVgNWglY4RBIgMsIGWPssC0COghgTlWEohooEUCKBCAkCWnQrRQJQghATrQlEgS0UCEFhEAAkkADUk6ADmTKAvYXJsBqSdwA4mY9dpk4irXRf3QKKx3aHuKxB5lfiJI2/tgVV9FRN0Pr1N2cfhX+Xrx8N5dlsCK6YjDe1Up9z86NnT/VlH9UzavKNStbTW0TC5ovSxDJ6RA4Xgwuu8WB+M0dbE1KK3oUbLwyKANBxAnklHFvh3F72B0/Q8psdjdqb6s+mgCb9bakjy+c8s0mPPHsrkiZ79aTZ+1sVWutSm5W+/wBHkFvC+sZ2s9MOjGmisp1CqoJtewJAvv8AnIGL7WmxAbUk6i2moIufd8JmNq7aLWsbki5A589PvdM8bS1N6wttsbYzAqvtGwHPdKDauznpJQxSMQz5xmGhBRgLg8u9aStlYNnPpKm/hfh4c5sO0+ycmzcMpGt2JHL0gZ7Hr3VHlO2KIi2occ1t13LL7M7TgjLiFsf/AGIND+Zd48r+Amhw2LSp/DdW6A6+a7xMGlGzWMsaWEQ2DDTg3I8rz0PLts7RbTMJhaierUdRyDtb3R5MTiU9vMP5kU/Kxg20Fp1pn22viV3qh/pYf7oa7fqcaIPg5X5gwbX1p2WVNPtEmYCojIpNvSEgqD/NbcOvyl4FuLjUHceYhTOWLljtp1oDWWcRHbQSsBq0ErHssEiA2VgER4rAKwyaIgWjxWBaBEWOAQVEcUQ0UCKBOAhgQBAhZYQWGEgAFjipImP2lSw477d7hTXVz5cPE2EzuM23WrXWmPRpzGrt/V7Pl74F9tPa9LD6Mcz8Ka6t5/hHj8ZlNoY2tij+87qX0provS/4j1PwjuG2aN53k6k7+evnJy0NVFvaH6wztX1MMFAFt3nwknYlY0ayVAbZWUE9G7tz4Gx/pkrEUuEjFLd08tR8vh9IFz202Bdv2mmv7urqbexUPrKeVzqPMcpgKuGamxA5fCe49mqq1sKEqAMrrkcH8S90k+NrzI9qOyL0GLoC9I7n3lOj/Q/Z423HcePRSYvGp9edZna+p1PzN5bbL2dmOZrnl8pKo4AKdRLnAoqjdYcZztfrp3ri16tuz+zvS1UogaE3fd6im7eF9F/qmy7bUg2FJ/A9M6cLuqfJjG+xuFSmhdyBUqgEKdCE3oBfib5vMcpYdpsN6TCVF/lz+aEOPionTFGo7+XmzW5W1HkPJcXs7N3k3j3HpG8KA16bA33WPCXSLr0jGJwmbvKDmGqkWvpw1+s7OAcBUzAo2rLx5i+hJ5yWaen3ukfA0coJf12N26clHQfqZYIfhAh/svONtgQD098s9D9+6NseEDPY7DKVqLbcVI6XUX+U7sntM0z+zVPULdxyfUJ9n8p+BPXR/Hf+UdEv/qEz7Cx8L6QsPSis4rKTsrtg1lNGof3iC4J9tN1+pGgPkec0BWAwREIjpEEiA1aIRHCIhEBsiAwjpEFhAZIgWjxEG0CGohBYqiGBDTlWGqRVWOKsBt2VFLuQFUXLHgBMztXtC7/u8MCgI1qG2Y9FHs+O/XhJXbbEFKCUwfXfX8qC/wDdllVs5A6jQXA84SUbCbPLEsbk7yTckk8zxMvaGCVRa3/ckYahYaSaEPz+cMoIpdOHKMOxRgwQsBvy2uN2tjvG/dr0lqKfz+sjmnYk23n6QIvpUbvIc1t67iDvsVOqnxEhVKeup1J1PWWrYQDv2727qBfdeQ8Sm8wNZ2Eq3D0jxs6+Isrj3ZPjLLau0XesKNmVFsM+5Xb2gTyG7XrMn2exjUqgdd43g8iMrfA38p6lQpIoCWuLXBOubjfxmZaqw219hJlDquXvW3AXBHIae6VJwQXQnu3sTxAvr4afKem7QwavScWA7rW5XsbG3MHWYXGbPdl7pufaHDynmyxqenu+ntyrqZ8bLaGxxUHcOQ6C45DcBArYsUlXD4lwDUVkSodzm1srHg2o37/GZHZXbDFU6tLCVKC1LkIHBZWygXJOhDEKDyvbzm0xNKni6dnUMjL6rDUXJBHQi071mLRuHkvSaTqXmqLYD8tvdvj9M8+R+kcxOGFJ2preyOyi+ulxbXwtI9Mgkgzo5nxYg+8ffCNVBkYDmD8LA/P4RKeGYMMr92+qsL6AHcd41PWR8Q5asbX7qjd1Y3+Q98ImB+f39/SNM/H76/rAC/Y1jb8b9f8AmBWYtv4ut+6hH/2e4kBaYy5jJpsy1D+TXzYyHU/CN0CsbEvTqirTOVkNweXMHmDe1upnpuyseuJopVTS4sy/hcesv3wInmmKPD7+/wBJadjNpmjiPRt6lXQ8lf2G8/VPiOUK9AIgkR5ljZEBu0QiOEQSIDZEBhHSIDCA0RBtHSIFoERRHVEBRHFENCUR1RAWOqJBju3S3qUBwyv7yUv8hImzH9GwI3Sd25/iUfyP/ckh4endAQNd/lKy0GikN7L3tyB4iTQv3r4ylwlUvTNJzY70PJtMpljs3GCopB0dSVZeRHD75wJaj71kOjW/eMjCxADJ1WwBI8738pOO7j9mRcTRLAOts6Eldd/8p6EfrwhDtVPd96SFiael7SdRqiol1+O8EbwR8P8AqNuo3Dj7/OBWYN8r2Pn4HT78J6h2fxfpsOgY94XUN/Om8HxFm/qI4Ty+tTs01nYzGD0jUGNhUAZTutUTXTqV/sEkrDbemYFRbjY9P00lJtABKxUABXAYcr7j4a/OXq94d4ajRh1HESs23hrpm/Ab3/lOjfQ+U5ZK7q7Ybat/UHYmAVsSahAIRTlbjd9APdmmgQDWw4yJsUBcP6S1s128r2X4Ae+S6K92546++McarCZrcrT+mC7RJlxFYc8je9AD8RKeid/lL3tcCMQ1uNND7mcfQSjwzae6dnJNU23/AHxkLA0MxepvzOfcLD6SU72U68PlKxdohFFNfWtcjlfW54DfCLXIACL6g7+krMfUUcQbfTT9JX1ce7H1t/Ld4X4+XvlfjKjWIB0YbhpewJHj5waFhcRcVepX5twindfdIGzH1cflPPnJdTiTew4frAhYkjfv1kZy9Tu30/CNNOpkyogY942H3ui+lRA2RTutm4W4wrVdlO061VShXOWoAFWoTo/AXPB/n8JqWWeQ0mLCyqFRRcsRrbxm47GdoDiU9DV/iILq/wD7EGlz/MOPPfzgaMiIRHGEEiA2RAYR0iAwgMkQbRwiDaBEURxRBUR1RDRVEcUQQIayDJdu071A/wAtT4FLj4yBs9u6LS47daU6Lj1hUIHmjEjzyygwTgEW3MLr85YZXvoC63HD3iVGMxLUKq1bWvZHHAj2X8eHulphsTbunu9fsyHtyk702V6tIi3q6BoGjwuJFRAwsdL/ABhMx1tz3TG9mtpkDITu038pqFr3H2YBu2Rs/sue90bcG8DuPW3Mx1+nH5xpWDgggG9wRzB4RnDVCh9G9ybXRuLLf5jj7+MITEG+v31i4PEsjq6esrK4/MpuPI2h10vrIavlIhHsWExCuFqJ6rorjwIuPnH3QEFSLqbi3jvHhMp2Ix/pKRose9Sbu9Ue5X3HMPdNWj3mZbhEp0hTSnQXUKqi/RABc+J+slEaSNTcEl9+tr+H/N48XuI0b2wPbh7Vj/lIPMu8ygxeUePD4S67av8A/Me3BEB9xb/cJlS9z5zUMyk4vHn0bG/AgDqTK+ndrAAnoATfy4mdiLO6U7E27xANrncAfjLnD4R7DQKPwjQdL8/ODxDTCmwLG3Qd5j9B85B2o2Vd9juA48jr+lpaY1xTFuPC2vWZraFUkkmBEwmL9HVDbxxmuRFqqHVgb8OXUzIV9nOuHTGWujVHp+GUKQT4nOP6Ose2bjfRnfYHjIsw0tbZNuN/D4SJicG7WXRVA1JNvHxkilii6HI9zwMhfsFWodWNjKGcfWRaZp0zcG1z4RnD4l6RTE0xlyMAp33Nje44ggkectMP2cAN6j2A1/7kTadb0zLQoIcqb7cSOMD0jZW0VxNJaqaX9Zd+VrC4+OnQyWRMJsjaAwGQVCSj9x7a5SSWVrcbXIt1PKbtWBAIIIIBBGoIOoIMACILCGYDQG2EG0cMCBEWOLBAhiGhLDEAQxIKDttQL0EK+zUB0/I4H6ecyWGqhLhhdL3YDehPtpzUg3Im57T3/Y6pU2IUMD1V1b6TB0cZTqkB29FUGgJ9Vul4hlfIFyjOQUYXV1J3cCCN8Gvs41BYZK620zXR18G4yJhsLiKdzRAZTqaZGam3Mi2qGSVp+kuHw1ak/NQzJfmGB/SUZbKaFYqAyj8J3jzmlwuOJG/kd8ptsbPdT6Qt3VOgd1Zz4BLkeZnYOtYfDfA1VHEa/fL5yViF9IgsQGXVG5HXf0O4+Mz2HxRGvKXeDxd7abuOkIew1cVBrcHcVPsniD0kavTsTJGKGW1ZVO4ZxwKgaNbmPl4CJUbOMw9/MHrCJnZzaPoMTTY6KTkf8rkAHybKfC89QLWvPGioIK8CDPTOzG0DXw1N3N2BKOeOZNLnqQAfOSVhcijlQAbh7/ORwTeTWaV+MqCmrOdygk+QvIryrtLis+JrNwLsvknc/wBvxlALiScfUzC51JuT56n5yCpuAo9ogfr8JpFxsPCEg1mHrG4J4DhLHG4vKuh13+7lIz18lMIu4C3ulLj8XpqYDWKxA1JPOUeIq5j0iV8QWMl7CwvpcVSpncXUn8q95vgDI1p6Zg9iodnrhKgsGp9629Xbvlh1Dm/lPLK+EfDVWoVRZlO/gwO5l5qd89nzSg7W7BGLp50H75Acn843lG8eHI9CYRgaOAqt3kt4gyT6TFU9L3kDA3Y6MVI0I1BHAgjhLKtUYnLmv15yhk7Uq7m907C4iszZaYsWO8b5NoYMkABSWPG0v8BgxRXMw71iXP4VGpt1g2zu3cKKFNA7FnLXb3frNP2G2uKlL9nc99LlAd7ITw/KTbwtMnUovjKrVW0QaJfdYboCo+HqpVpkBkIYdbbwehFwfGB6uYDSNszaKYmmtSmdDoy8Ubip6j475IMgQwIRgSiOI4J06RoohCLOgQe0H+Erf5b/ACnlmK9X75Tp0MtT2U9QeA+ks+0HqHyizpUYp/Ufwg4P1PvlOnQqww/DwH0lpsr+J7/mJ06Bol9UeP8AtlZs7+Av5F+U6dDJOH9Rm07AfwH/AM8f/lTnTpJWGzqbpU9of8LV/wAt/wC0zp0K8W2h9Ixhv4ief1nTpU+Ftjdw8D9Zm9q7p06CFUu+aLsV/jE8Kn9jRZ0jb0oQ13xJ0rLyfG/43E/5tT+4yZhPXE6dEDZbL4/fsQMb/Cf8h+s6dKypMJ/hhKDavrTp0K0v/wDOPVxH5qfyebOdOmVAYkSdKP/Z"
    }

]);


const swiped = (direction, nameToDelete) => {
    console.log("removing: "+ nameToDelete);
    // setLastDirection(direction);
}



const outOfFrame = (name) => {
    console.log(name+ ' left the screen!');
}

     
return (
    <div className='tinderCards'>
    <div className="tinderCards__cardContainer">
    {people.map((person)=>(
       <TinderCard

       className='swipe'
       key={person.name}
       preventSwipe = {['up','down']}
       onSwipe = { (dir)=> swiped(dir,person.name)}
       onCardLeftScreen={()=> outOfFrame(person.name)}
       >

       <div className="card" style={{backgroundImage: `url(${person.url})` }} >

       <h3>{person.name}</h3>
       </div>

       </TinderCard>  
       
         ))}

    </div>
    
    </div>
  );
}

export default TinderCards