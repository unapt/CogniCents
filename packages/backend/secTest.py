from sec_api import ExtractorApi
import os
from dotenv import load_dotenv
from pathlib import Path

dotenv_path = Path('..\HackPrinceton\.env')
load_dotenv()
secapikey = os.getenv("SEC-API-KEY")
extractorApi = ExtractorApi(secapikey)


def tenq():
    # 10-Q example
    url_10q = "https://www.sec.gov/Archives/edgar/data/1318605/000095017022006034/tsla-20220331.htm"

    part2_item_1A_text = extractorApi.get_section(url_10q, "part2item1a", "text")
    return part2_item_1A_text

print(tenq())